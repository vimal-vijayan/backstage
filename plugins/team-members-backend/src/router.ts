// src/router.ts
import { Router } from 'express';
import express from 'express';
import { LoggerService } from '@backstage/backend-plugin-api';
import { ITeamMembersService } from './services/TeamMembersService';

export interface RouterOptions {
  logger: LoggerService;
  teamMembersService: ITeamMembersService;
}

export async function createRouter(
  options: RouterOptions,
): Promise<Router> {
  const { logger, teamMembersService } = options;
  
  const router = Router();
  router.use(express.json());

  router.get('/teams/:teamId/members', async (req, res) => {
    const { teamId } = req.params;
    
    try {
      const members = await teamMembersService.getTeamMembers(teamId);
      res.json(members);
    } catch (error: unknown) {
      if (error instanceof Error) {
        logger.error(`Failed to get team members: ${error.message}`);
        
        if (error.message.includes('not found')) {
          res.status(404).json({ error: error.message });
          return;
        }
      } else {
        logger.error(
          'Failed to get team members with an unknown error type',
          {
            error: String(error),
            teamId,
            timestamp: new Date().toISOString()
          }
        );
      }
      
      res.status(500).json({ error: 'Failed to fetch team members' });
    }
  });

  router.get('/health', async (_, res) => {
    try {
      const health = await teamMembersService.checkHealth();
      
      // Set HTTP status based on health
      const status = health.isHealthy ? 200 : 503;
      
      // Add response timestamp
      const response = {
        ...health,
        timestamp: new Date().toISOString(),
      };

      logger.info('Health check performed', {
        healthy: health.isHealthy,
        microsoftGraphConnected: health.microsoftGraph.isConnected,
        teamCount: health.teamsConfig.teamCount,
      });

      res.status(status).json(response);
    } catch (error: unknown) {
      logger.error('Health check failed', {
        error: error instanceof Error ? error.message : String(error),
      });
      
      res.status(500).json({
        isHealthy: false,
        timestamp: new Date().toISOString(),
        message: 'Health check failed unexpectedly',
      });
    }
  });

  router.get('/config', async (_req, res) => {
    try {
      const ownerConfig = teamMembersService.getOwnerConfig();
      res.json(ownerConfig);
    } catch (error) {
      logger.error('Failed to get owner config', {
        error: error instanceof Error ? error.message : String(error),
      });
      
      res.status(500).json({ error: 'Failed to fetch owner config' });
    }
  });

  return router;
}
