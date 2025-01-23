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

              // Get user's Microsoft groups
              const groups = await getMicrosoftGroups(accessToken);

              // Create the user entity reference
              const userEntity = stringifyEntityRef({
                kind: 'User',
                name: localPart,
                namespace: DEFAULT_NAMESPACE,
              });
              
              interface MicrosoftGroup {
                id: string; // Unique group ID
                displayName: string; // Group name
                // Add other properties as needed
              }

              // Create group references
               const groupRefs = groups.map((group: MicrosoftGroup) =>
                stringifyEntityRef({
                  kind: 'Group',
                  name: group.id, // Use unique group ID
                  namespace: DEFAULT_NAMESPACE,
                }),
              );

              // Return token with user and group claims
              return ctx.issueToken({
                claims: {
                  sub: userEntity,
                  ent: [userEntity, ...groupRefs], // Ownership references
                },
              });
            },
          }),
        });
      },
    });
  },
});

// Helper function to fetch Microsoft groups
async function getMicrosoftGroups(accessToken: string) {
  const response = await fetch(
    'https://graph.microsoft.com/v1.0/me/memberOf?$select=id,displayName',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user groups from Microsoft Graph API');
  }

  const data = await response.json();

  // Ensure that only security groups or M365 groups are included
  return data.value.filter(
    group => group['@odata.type'] === '#microsoft.graph.group',
  );
}

export { customMicrosoftAuth };