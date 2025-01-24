// src/components/TeamComponents/TeamComponents.tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

// Define the user type
type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: string;
  nat: string;
  team: 'Cloud' | 'IAM';
  role: string;
};

// Sample team data
const teamMembers: User[] = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'John',
      last: 'Smith',
    },
    email: 'john.smith@example.com',
    picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=John',
    nat: 'US',
    team: 'Cloud',
    role: 'Cloud Architect'
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Alice',
      last: 'Johnson',
    },
    email: 'alice.johnson@example.com',
    picture: 'https://api.dicebear.com/6.x/open-peeps/svg?seed=Alice',
    nat: 'UK',
    team: 'IAM',
    role: 'Identity Manager'
  },
  // Add more team members as needed
];

const TeamTable = ({ users, teamName }: { users: User[], teamName: string }) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Avatar', field: 'avatar' },
    { title: 'Name', field: 'name' },
    { title: 'Role', field: 'role' },
    { title: 'Email', field: 'email' },
    { title: 'Location', field: 'nationality' },
  ];

  const data = users.map(user => ({
    avatar: <img src={user.picture} className={classes.avatar} alt={user.name.first} />,
    name: `${user.name.first} ${user.name.last}`,
    role: user.role,
    email: user.email,
    nationality: user.nat,
  }));

  return (
    <Table
      title={`${teamName} Team Members`}
      options={{ search: true, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const CloudTeamComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
    // In a real app, this would be an API call
    return teamMembers.filter(user => user.team === 'Cloud');
  }, []);

  if (loading) return <Progress />;
  if (error) return <ResponseErrorPanel error={error} />;
  return <TeamTable users={value || []} teamName="Cloud" />;
};

export const IAMTeamComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
    // In a real app, this would be an API call
    return teamMembers.filter(user => user.team === 'IAM');
  }, []);

  if (loading) return <Progress />;
  if (error) return <ResponseErrorPanel error={error} />;
  return <TeamTable users={value || []} teamName="IAM" />;
};

export const SendGridComponent = () => {};
export const AzureDevopsComponent = () => {};