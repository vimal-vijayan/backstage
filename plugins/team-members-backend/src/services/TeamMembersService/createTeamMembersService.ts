import { Config } from '@backstage/config';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Client, ResponseType } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { ClientSecretCredential } from '@azure/identity';
import { TeamConfig, TeamMember, ITeamMembersService } from './types';


export class DefaultTeamMembersService implements ITeamMembersService {
    private graphClient: Client | null = null;
    private teamConfigs: TeamConfig[] = [];
    private cache: Map<string, { data: TeamMember[]; timestamp: number }> = new Map();
    private readonly CACHE_TTL = 3600000; // 1 hour

    constructor(
        private readonly config: Config,
        private readonly logger: LoggerService,
    ) {
        this.initializeService();
    }

    private initializeService() {
        // Initialize team configurations with safe reading
        try {
            if (this.config.has('cet.teams')) {
                this.teamConfigs = this.config.getConfigArray('cet.teams').map(teamConfig => ({
                    id: teamConfig.getString('id'),
                    name: teamConfig.getString('name'),
                    groupId: teamConfig.getString('groupId'),
                    offerings: teamConfig.getOptionalStringArray('offerings') ?? [],
                }));
                this.logger.info(`Loaded ${this.teamConfigs.length} team configurations`);
            } else {
                this.logger.info('No team configurations found in app-config.yaml');
                this.teamConfigs = [];
            }
        } catch (error) {
            this.logger.warn('Error loading team configurations, using empty configuration', {
                error: error instanceof Error ? error.message : String(error),
            });
            this.teamConfigs = [];
        }

        // Initialize Microsoft Graph client only if authentication is configured
        try {
            if (this.hasValidMicrosoftConfig()) {
                const credential = new ClientSecretCredential(
                    this.config.getString('auth.providers.microsoft.development.tenantId'),
                    this.config.getString('auth.providers.microsoft.development.clientId'),
                    this.config.getString('auth.providers.microsoft.development.clientSecret'),
                );

                const authProvider = new TokenCredentialAuthenticationProvider(credential, {
                    scopes: ['https://graph.microsoft.com/.default'],
                });

                this.graphClient = Client.initWithMiddleware({ authProvider });

                this.logger.info('Microsoft Graph client initialized successfully');
            } else {
                this.logger.warn(
                    'Microsoft authentication configuration is incomplete or missing. Some features will be limited.',
                );
            }
        } catch (error) {
            this.logger.error('Failed to initialize Microsoft Graph client', {
                error: error instanceof Error ? error.message : String(error),
            });
            this.graphClient = null;
        }
    }

    private hasValidMicrosoftConfig(): boolean {
        try {
            return (
                this.config.has('auth.providers.microsoft.development.tenantId') &&
                this.config.has('auth.providers.microsoft.development.clientId') &&
                this.config.has('auth.providers.microsoft.development.clientSecret')
            );
        } catch {
            return false;
        }
    }

    async getTeamMembers(teamId: string): Promise<TeamMember[]> {
        const teamConfig = this.teamConfigs.find(t => t.id === teamId);

        this.logger.info('Starting getTeamMembers request', {
            requestedTeamId: teamId,
            availableTeamIds: this.teamConfigs.map(t => t.id)
        });

        if (!teamConfig) {
            this.logger.warn(`Team ${teamId} not found in configuration`);
            return [];
        }

        // Check if Microsoft Graph client is available
        if (!this.graphClient) {
            this.logger.warn('Microsoft Graph client not initialized, returning empty team members list');
            return [];
        }

        this.logger.info(`Found team configuration`, {
            teamId: teamConfig.id,
            teamName: teamConfig.name,
            groupId: teamConfig.groupId
        });

        // Check cache first
        const cacheKey = `team-${teamId}`;
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
            this.logger.debug(`Returning cached data for team ${teamId}`);
            return cached.data;
        }

        try {

            this.logger.info(`Fetching members from Microsoft Graph API for group ${teamConfig.groupId}`);

            const response = await this.graphClient
                .api(`/groups/${teamConfig.groupId}/members`)
                .select('id,displayName,mail,jobTitle')
                .get();

            const members: TeamMember[] = await Promise.all(
                response.value.map(async (member: any) => {
                    let photoUrl: string | undefined;

                    try {
                        // Fetch the user's profile photo
                        const photoResponse = await this.graphClient!
                            .api(`/users/${member.id}/photo/$value`)
                            .responseType(ResponseType.ARRAYBUFFER)
                            .get();

                        const buffer = Buffer.from(photoResponse);
                        const imageBase64 = buffer.toString('base64');
                        photoUrl = `data:image/jpeg;base64,${imageBase64}`;
                    } catch (error) {
                        if (error instanceof Error && 'statusCode' in error) {
                            if ((error as any).statusCode !== 404) {
                                this.logger.warn('Failed to fetch user photo from Microsoft Graph API', {
                                    error: error.message,
                                    userId: member.id,
                                });
                            }
                        } else {
                            this.logger.error('An unexpected error occurred while fetching photo for user')
                        }
                        photoUrl = undefined; // No photo available
                    }

                    return {
                        id: member.id,
                        displayName: member.displayName,
                        email: member.mail,
                        jobTitle: member.jobTitle,
                        offerings: teamConfig.offerings,
                        photoUrl, // Include the photo URL
                    };
                })
            );

            this.logger.info('Successfully fetched team members:', {
                teamId,
                teamName: teamConfig.name,
                memberCount: members.length,
                members: members.map(member => ({
                    name: member.displayName,
                    role: member.jobTitle || 'No role specified'
                }))
            });

            this.logger.info(`Attempting to fetch members for team: ${teamId}`);
            console.log("Fetching members for team: ", teamId);

            // Create a more readable console output for the members
            // FIXME: only for debugging purposes
            // console.log('\n=== Team Members Retrieved ===');
            // console.log(`Team: ${teamConfig.name} (${teamId})`);
            // console.log('Members:');
            // members.forEach(member => {
            //     console.log(`- ${member.displayName} (${member.jobTitle || 'No role specified'})`);
            //     console.log(`  Email: ${member.email}`);
            //     console.log(`  Role: ${member.jobTitle}`)
            // });
            // console.log('============================\n');

            this.cache.set(cacheKey, {
                data: members,
                timestamp: Date.now(),
            });

            return members;
        } catch (error) {
            console.log("Error fetching members for team: ", teamId);
            this.logger.error('Failed to fetch team members from Microsoft Graph API', {
                error: error instanceof Error ? error.message : String(error),
                teamId,
            });
            return [];
        }

    }

    async checkHealth(): Promise<HealthStatus> {
        // Start with a basic health status
        const healthStatus: HealthStatus = {
            isHealthy: false,
            microsoftGraph: {
                isConfigured: this.hasValidMicrosoftConfig(),
                isConnected: false,
                lastChecked: new Date().toISOString(),
            },
            teamsConfig: {
                isConfigured: this.teamConfigs.length > 0,
                teamCount: this.teamConfigs.length,
            },
        };

        // If Microsoft Graph is configured, test the connection
        if (this.graphClient) {
            try {
                // Make a simple API call to verify connectivity
                await this.graphClient.api('/me').get();
                healthStatus.microsoftGraph.isConnected = true;
            } catch (error) {
                this.logger.warn('Health check failed to connect to Microsoft Graph', {
                    error: error instanceof Error ? error.message : String(error),
                });
                healthStatus.message = 'Failed to connect to Microsoft Graph API';
            }
        }

        // Determine overall health
        healthStatus.isHealthy =
            (healthStatus.microsoftGraph.isConfigured && healthStatus.microsoftGraph.isConnected) ||
            (!healthStatus.microsoftGraph.isConfigured && healthStatus.teamsConfig.isConfigured);

        return healthStatus;
    }

}

export function createTeamMembersService(
    config: Config,
    logger: LoggerService,
): TeamMembersService {
    return new DefaultTeamMembersService(config, logger);
}
export interface HealthStatus {
    isHealthy: boolean;
    microsoftGraph: {
        isConfigured: boolean;
        isConnected: boolean;
        lastChecked: string;
    };
    teamsConfig: {
        isConfigured: boolean;
        teamCount: number;
    };
    message?: string;
}

export interface TeamMembersService {
    getTeamMembers(teamId: string): Promise<TeamMember[]>;
    checkHealth(): Promise<HealthStatus>;  // Add this new method
}