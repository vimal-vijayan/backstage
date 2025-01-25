import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { fetchApiRef, configApiRef, useApi } from '@backstage/core-plugin-api';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type TeamMember = {
  id: string;
  displayName: string;
  email: string;
  jobTitle: string;
  photoUrl: string;
};


const TeamTable = ({ users, teamName }: { users: TeamMember[]; teamName: string }) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    {
      title: 'Avatar',
      field: 'photoUrl',
      width: 'auto',
      render: (rowData: Partial<TeamMember>) => (
        <Avatar
          src={rowData.photoUrl || undefined}
          alt={rowData.displayName}
          className={classes.avatar}
        >
          {!rowData.photoUrl && <PersonIcon />}
        </Avatar>
      ),
    },
    { title: 'Name', field: 'displayName' },
    { title: 'Role', field: 'jobTitle' },
    { title: 'Email', field: 'email' },
  ];

  return (
    <Table
      title={`${teamName} Team Members`}
      options={{ search: true, paging: false }}
      columns={columns}
      data={users}
    />
  );
};


export const CloudTeamComponent = () => {
  const fetchApi = useApi(fetchApiRef);
  const config = useApi(configApiRef);
  const backendUrl = config.getString('backend.baseUrl');

  const { value, loading, error } = useAsync(async () => {
    const response = await fetchApi.fetch(`${backendUrl}/api/team-members/teams/cloud/members`);
    if (!response.ok) throw new Error('Failed to fetch Cloud team members');
    return response.json();
  }, []);

  if (loading) return <Progress />;
  if (error) return <ResponseErrorPanel error={error} />;
  return <TeamTable users={value || []} teamName="Cloud" />;
};

export const IAMTeamComponent = () => {
  const config = useApi(configApiRef);
  const fetchApi = useApi(fetchApiRef);
  const backendUrl = config.getString('backend.baseUrl');
  
  const { value, loading, error } = useAsync(async () => {
    const response = await fetchApi.fetch(`${backendUrl}/api/team-members/teams/identity/members`);
    if (!response.ok) throw new Error('Failed to fetch IAM team members');
    return response.json();
  }, []);

  if (loading) return <Progress />;
  if (error) return <ResponseErrorPanel error={error} />;
  return <TeamTable users={value || []} teamName="IAM" />;
};

export const SendGridComponent = () => {};
export const AzureDevopsComponent = () => {};