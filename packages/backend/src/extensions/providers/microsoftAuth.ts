import { createBackendModule } from '@backstage/backend-plugin-api';
import { microsoftAuthenticator } from '@backstage/plugin-auth-backend-module-microsoft-provider';
import {
  authProvidersExtensionPoint,
  createOAuthProviderFactory,
} from '@backstage/plugin-auth-node';
import {
  stringifyEntityRef,
  DEFAULT_NAMESPACE,
} from '@backstage/catalog-model';

// Define the interface for Microsoft groups at the top level for better type safety
interface MicrosoftGroup {
  id: string;
  displayName: string;
  '@odata.type'?: string;
}

const customMicrosoftAuth = createBackendModule({
  pluginId: 'auth',
  moduleId: 'custom-microsoft-auth-provider',
  register(reg) {
    reg.registerInit({
      deps: { providers: authProvidersExtensionPoint },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'microsoft',
          factory: createOAuthProviderFactory({
            authenticator: microsoftAuthenticator,
            async signInResolver({ result, profile }, ctx) {
              // Verify email existence and domain
              if (!profile.email) {
                throw new Error(
                  'Login failed, user profile does not contain an email',
                );
              }
              const [localPart, domain] = profile.email.split('@');
              if (domain !== 'essity.com') {
                throw new Error(
                  `Login failed, '${profile.email}' does not belong to the expected domain`,
                );
              }

              // Access the access token from the session property
              const accessToken = result.session.accessToken;
              if (!accessToken) {
                throw new Error('Access token is missing in the session');
              }

              // Get user's Microsoft groups
              const groups = await getMicrosoftGroups(accessToken);

              // Create the user entity reference
              const userEntity = stringifyEntityRef({
                kind: 'User',
                name: localPart,
                namespace: DEFAULT_NAMESPACE,
              });

              // Create group references with both ID and display name
              const groupRefs = groups.map((group: MicrosoftGroup) =>
                stringifyEntityRef({
                  kind: 'Group',
                  name: group.id,
                  namespace: DEFAULT_NAMESPACE,
                })
              );

              // Return token with enhanced claims including both refs and display names
              return ctx.issueToken({
                claims: {
                  sub: userEntity,
                  ent: [userEntity, ...groupRefs],
                  groups: groups.map(group => ({
                    ref: stringifyEntityRef({
                      kind: 'Group',
                      name: group.id,
                      namespace: DEFAULT_NAMESPACE,
                    }),
                    displayName: group.displayName,
                  })),
                },
              });
            },
          }),
        });
      },
    });
  },
});

// Enhanced helper function to fetch and filter Microsoft groups
async function getMicrosoftGroups(accessToken: string): Promise<MicrosoftGroup[]> {
  try {
    const response = await fetch(
      'https://graph.microsoft.com/v1.0/me/memberOf?$select=id,displayName',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch user groups: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`,
      );
    }

    const data = await response.json();

    // Filter groups to match catalog provider configuration
    const filteredGroups = data.value
      .filter((group: MicrosoftGroup) => 
        // First ensure it's a security group
        group['@odata.type'] === '#microsoft.graph.group' &&
        // Then match the catalog provider's filter pattern
        group.displayName.startsWith('co-idp-launchpad-')
      );

    // Log filtered groups for debugging
    console.debug(`Found ${filteredGroups.length} matching groups for user`);

    return filteredGroups;
  } catch (error) {
    console.error('Error fetching Microsoft groups:', error);
    throw error;
  }
}

export { customMicrosoftAuth };