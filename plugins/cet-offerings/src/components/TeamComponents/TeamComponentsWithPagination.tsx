import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { fetchApiRef, configApiRef, useApi } from '@backstage/core-plugin-api';
import { Avatar, IconButton } from '@mui/material';
import { Pagination } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { themes } from '@backstage/theme';


const ROWS_PER_PAGE = 10;

const useStyles = makeStyles( theme => ({
  avatar: {
    height: 32,
    color: '#4040e9',
    width: 32,
    borderRadius: '50%',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.8)',
      boxShadow: '0 4px 10px 0 rgba(14, 182, 233, 0.2)',
    },
  },
  expandButton : {
    marginLeft: theme.spacing(1),
    transition: 'transform 0.3s ease-in-out',
  },
  expanded: {
    transform: 'rotate(180deg)',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  tableContainer: {
    transition: 'max-height 0.3s ease-in-out',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}));

type TeamMember = {
  id: string;
  displayName: string;
  email: string;
  jobTitle: string;
  photoUrl: string;
};


const TeamTable = ({ users, teamName }: { users: TeamMember[]; teamName: string }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(true);
  const [page, setPage] = useState(1);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ROWS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + ROWS_PER_PAGE);
  const totalPages = Math.ceil(users.length / ROWS_PER_PAGE);

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

  // return (
  //   <Table
  //     title={`${teamName} Team Members`}
  //     options={{ search: true, paging: false }}
  //     columns={columns}
  //     data={users}
  //   />
  // );
  return (
    <div className={classes.tableContainer} style={{ maxHeight: isExpanded ? '1000px' : '100px' }}>
      <div className={classes.tableHeader}>
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
          {teamName} Team Members
          <IconButton
            onClick={handleExpandToggle}
            className={classes.expandButton}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse team members' : 'Expand team members'}
          >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h2>
      </div>

      <div style={{ display: isExpanded ? 'block' : 'none' }}>
        <Table
          options={{ search: true, paging: false, padding: 'dense' }}
          columns={columns}
          data={paginatedUsers}
        />
        
        {totalPages > 1 && (
          <div className={classes.paginationContainer}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="medium"
              showFirstButton
              showLastButton
            />
          </div>
        )}
      </div>
    </div>
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

export const SendGridComponent = () => { };
export const AzureDevopsComponent = () => { };
