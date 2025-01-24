// TeamTable.tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn } from '@backstage/core-components';
import { User } from './types';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type TeamTableProps = {
  users: User[];
  teamName: string;
};

export const TeamTable = ({ users, teamName }: TeamTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Avatar', field: 'avatar' },
    { title: 'Name', field: 'name' },
    { title: 'Role', field: 'role' },
    { title: 'Skills', field: 'skills' },
    { title: 'Email', field: 'email' },
    { title: 'Location', field: 'nationality' }
  ];

  const data = users.map(user => ({
    avatar: <img src={user.picture} className={classes.avatar} alt={user.name.first} />,
    name: `${user.name.first} ${user.name.last}`,
    role: user.role,
    skills: user.skills.join(', '),
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