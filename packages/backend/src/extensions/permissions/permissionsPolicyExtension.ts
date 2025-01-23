import { createBackendModule } from '@backstage/backend-plugin-api';
import {
  PolicyDecision,
  AuthorizeResult,
  isPermission,
} from '@backstage/plugin-permission-common';
import {
  catalogConditions,
  createCatalogConditionalDecision,
} from '@backstage/plugin-catalog-backend/alpha';
import {
  catalogEntityDeletePermission,
} from '@backstage/plugin-catalog-common/alpha';
import {
  PermissionPolicy,
  PolicyQuery,
  PolicyQueryUser,
} from '@backstage/plugin-permission-node';
import { policyExtensionPoint } from '@backstage/plugin-permission-node/alpha';

class CustomPermissionPolicy implements PermissionPolicy {
  async handle(
    request: PolicyQuery,
    user?: PolicyQueryUser,
  ): Promise<PolicyDecision> {
    // First, check if we have a valid user with ownership information
    if (!user?.info?.ownershipEntityRefs) {
      return { result: AuthorizeResult.DENY };
    }

    // Check if the user is part of the admin group
    // Note: We use the display name since that's what we configured in our resolver
    const isAdmin = user.info.ownershipEntityRefs.some(ref => 
      ref === 'group:default/co-idp-launchpad-admin'
    );

    // If user is an admin, allow all operations
    if (isAdmin) {
      return { result: AuthorizeResult.ALLOW };
    }

    // For non-admins, apply the existing entity ownership rules
    if (isPermission(request.permission, catalogEntityDeletePermission)) {
      return createCatalogConditionalDecision(
        request.permission,
        catalogConditions.isEntityOwner({
          claims: user.info.ownershipEntityRefs,
        }),
      );
    }

    // Default permission behavior for non-admin users
    return { result: AuthorizeResult.ALLOW };
  }
}

export default createBackendModule({
  pluginId: 'permission',
  moduleId: 'permission-policy',
  register(reg) {
    reg.registerInit({
      deps: { policy: policyExtensionPoint },
      async init({ policy }) {
        policy.setPolicy(new CustomPermissionPolicy());
      },
    });
  },
});