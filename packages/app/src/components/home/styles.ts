import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // Logo styles with improved consistency
  logo: {
    width: '275px',
    height: 'auto',
    objectFit: 'contain',
    margin: '0 auto',
    position: 'relative',
    padding: theme.spacing(2, 0),
    transition: theme.transitions.create(
      ['opacity', 'filter', 'transform'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
    display: 'block',
    marginLeft: '0',
    marginRight: 'auto',
  },

  // Quick link icon base styles with improved consistency
  quickLinkIcon: {
    fontSize: '1.5rem',
    transition: theme.transitions.create(
      ['transform', 'color', 'background-color'],
      {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
    '&:hover': {
      transform: 'scale(1.5)',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    margin: theme.spacing(1),
  },

  // Document icon with improved theme handling
  docsIcon: {
    color: theme.palette.type === 'dark' ? '#FFB74D' : '#FF9800',
    backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 152, 0, 0.1)' : '#FFF3E0',
    padding: theme.spacing(1),
    fontSize: '2.5rem',
    '&:hover': {
      color: theme.palette.type === 'dark' ? '#FFA726' : '#F57C00',
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 152, 0, 0.2)' : '#FFE0B2',
    },
  },

  // Wiki icon with improved theme handling
  wikiIcon: {
    color: theme.palette.type === 'dark' ? '#81C784' : '#4CAF50',
    backgroundColor: theme.palette.type === 'dark' ? 'rgba(76, 175, 80, 0.1)' : '#E8F5E9',
    padding: theme.spacing(1),
    fontSize: '2.5rem',
    '&:hover': {
      color: theme.palette.type === 'dark' ? '#66BB6A' : '#388E3C',
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(76, 175, 80, 0.2)' : '#C8E6C9',
    },
  },

  // Backstage icon with improved theme handling
  backstageIcon: {
    width: '30px',
    height: '30px',
    color: theme.palette.type === 'dark' ? '#eaf5fe' : '#0078D4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create(
      ['transform', 'background-color', 'color'],
      {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }
    ),
    '&:hover': {
      transform: 'scale(1.5)',
      color: theme.palette.type === 'dark' ? '#009e93' : '#005A9E',
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(33, 150, 243, 0.2)' : '#E5F1FB',
    },
    borderRadius: '50%',
    backgroundColor: theme.palette.type === 'dark' ? 'rgba(33, 150, 243, 0.1)' : '#E5F1FB',
    padding: theme.spacing(1),
    boxSizing: 'content-box',
  },
}));