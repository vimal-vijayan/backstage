// src/components/TeamTabs/styles.ts
import { makeStyles } from '@material-ui/core';

// Define a type for our style classes to ensure type safety
type StyleClasses = {
  cardHeader: string;
  cloudIcon: string;
  securityIcon: string;  // Add this to the type
  tabs: string;
  cloudTab: string;
  securityTab: string;
  tabIcon: string;
  tabPanel: string;
};

export const useStyles = makeStyles((theme) => ({
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '&:hover .icon': {
      transform: 'scale(1.1)',
    },
  },

  cloudIcon: {
    color: '#2196F3',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#E3F2FD',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  // Add the securityIcon style that was missing
  securityIcon: {
    color: '#673AB7',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#EDE7F6',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  // Rest of your styles...
  tabs: {
    marginBottom: theme.spacing(2),
    '& .MuiTab-root': {
      minHeight: 64,
      padding: theme.spacing(2),
    },
  },

  cloudTab: {
    '& .tabIcon': {
      color: '#2196F3',
      backgroundColor: '#E3F2FD',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#BBDEFB',
    },
  },

  securityTab: {
    '& .tabIcon': {
      color: '#673AB7',
      backgroundColor: '#EDE7F6',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#D1C4E9',
    },
  },

  tabIcon: {
    marginRight: theme.spacing(1),
  },

  tabPanel: {
    padding: theme.spacing(3, 0),
  },
}));