import { makeStyles } from '@material-ui/core';

type StyleClasses = {
  cardHeader: string;
  cloudIcon: string;
  securityIcon: string;
  tabs: string;
  cloudTab: string;
  securityTab: string;
  tabIcon: string;
  tabPanel: string;
  devopsTab: string;
  devopsIcon: string;
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

  quickLinkIcon: {
    fontSize: '1.5rem',
    transition: theme.transitions.create(['transform', 'color'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      transform: 'scale(1.3)',
    },
  },

  docsIcon: {
    color: '#FF9800',
    '&:hover': {
      color: '#F57C00',
    },
    borderRadius: '30%',
  },

  wikiIcon: {
    color: '#4CAF50',
    '&:hover': {
      color: '#388E3C',
    },
  },


  devopsIcon: {
    // Using Azure DevOps' signature blue color
    color: '#0078D4',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    
    backgroundColor: '#E5F1FB',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  devopsLogo: {
    width: '37px',
    height: '37px',
    objectFit: 'contain',
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F1FB',
    borderRadius: '50%',
    padding:theme.spacing(1), //'6px',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#BBDEFB',
    },
  },

  emailIcon: {
    color: '#00B336',  
    transition: theme.transitions.create(['transform', 'background-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: '#E6F4EA',
    padding: theme.spacing(1),
    borderRadius: '50%',
    fontSize: '2.5rem',
  },

  emailTab: {
    '& .tabIcon': {
      color: '#00B336',
      backgroundColor: '#E6F4EA',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#CCE9D4',
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

  devopsTab: {
    '& .tabIcon': {
      color: '#0078D4',
      backgroundColor: '#E5F1FB',
      padding: theme.spacing(1),
      borderRadius: '50%',
      fontSize: '2.3rem',
      transition: theme.transitions.create(['transform', 'background-color'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:hover .tabIcon': {
      transform: 'scale(1.1)',
      backgroundColor: '#CCE4F7',
    },
  },

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