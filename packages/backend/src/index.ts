/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';
// microsoft provider
import { customMicrosoftAuth } from './extensions/providers/microsoftAuth';

const backend = createBackend();

backend.add(import('@backstage/plugin-notifications-backend'));
backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin

backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider
backend.add(customMicrosoftAuth)

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(import('@backstage/plugin-catalog-backend-module-msgraph'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);
// Azure DevOps catalog
backend.add(import('@backstage/plugin-catalog-backend-module-azure'));
// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));
// See https://backstage.io/docs/permissions/getting-started for how to create your own permission policy
// NOTE: disabling allow-all-policy
// backend.add(
//   import('@backstage/plugin-permission-backend-module-allow-all-policy'),
// );
backend.add(import('./extensions/permissions/permissionsPolicyExtension'));


// search plugin
backend.add(import('@backstage/plugin-search-backend'));

// search engine
// See https://backstage.io/docs/features/search/search-engines
backend.add(import('@backstage/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// kubernetes
backend.add(import('@backstage/plugin-kubernetes-backend'));

// backend.add(import('@internal/backstage-plugin-team-members-backend'));
import teamMembersPlugin from '@internal/backstage-plugin-team-members-backend';
backend.add(teamMembersPlugin);

// Azure devops custom action
backend.add(import('@backstage/plugin-scaffolder-backend-module-azure'));
// Azure Pipelines
backend.add(import('@parfuemerie-douglas/scaffolder-backend-module-azure-pipelines'));
// Azure Repos
backend.add(import('@parfuemerie-douglas/scaffolder-backend-module-azure-repositories'))


backend.start();
