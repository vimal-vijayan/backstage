// src/plugin.ts
import {
  createBackendPlugin,
  coreServices,
} from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import { LoggerService } from '@backstage/backend-plugin-api';
import { createRouter } from './router';
import { createTeamMembersService } from './services/TeamMembersService';

export interface PluginEnvironment {
  logger: LoggerService;
  config: Config;
}

export const teamMembersPlugin = createBackendPlugin({
  pluginId: 'team-members',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        httpRouter: coreServices.httpRouter,
        config: coreServices.rootConfig,
        auth: coreServices.auth,
        httpAuth: coreServices.httpAuth,
      },
      async init({ logger, config, httpRouter }) {
        const teamMembersService = createTeamMembersService(config, logger);
        const router = await createRouter({
          logger,
          teamMembersService,
        });

        httpRouter.use(router);

        // FIXME:  Allow unauthenticated requests to the health endpoint, Remove this in production
        httpRouter.addAuthPolicy({
          path: '/teams/cloud/members',
          allow: 'unauthenticated'
        })
        httpRouter.addAuthPolicy({
          path: '/teams/identity/members',
          allow: 'unauthenticated',
        })
      },
    });
  },
});