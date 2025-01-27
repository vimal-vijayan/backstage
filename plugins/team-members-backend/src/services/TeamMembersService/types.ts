export interface TeamConfig {
    id: string;
    name: string;
    groupId: string;
    offerings: string[];
    owner: string;
    lifecycle: string;
  }
  
  export interface TeamMember {
    id: string;
    displayName: string;
    email: string;
    jobTitle: string;
    offerings: string[];
    photoUrl?: string;
  }
  
  export interface ITeamMembersService {
    getTeamMembers(teamId: string): Promise<TeamMember[]>;
    checkHealth(): Promise<HealthStatus>;
    getOwnerConfig(): { owner: string, lifecycle: string };
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