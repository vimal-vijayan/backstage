import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    quickLinkIcon: {
        fontSize: '1.5rem',
        transition: theme.transitions.create(['transform', 'color'], {
            duration: theme.transitions.duration.shorter,
        }),
        '&:hover': {
            transform: 'scale(1.5)',
        },
    },

    docsIcon: {
        color: '#FF9800',
        '&:hover': {
            color: '#F57C00',
        },
        borderRadius: '50%',
        backgroundColor: '#FFF3E0',
        padding: theme.spacing(1),
        fontSize: '2.5rem',
    },
    wikiIcon: {
        color: '#4CAF50',
        '&:hover': {
            color: '#388E3C',
        },
        borderRadius: '50%',
        backgroundColor: '#E8F5E9',
        padding: theme.spacing(1),
        fontSize: '2.5rem',
    },
    backstageIcon: {
        width: '38px',
        height: '38px',   
        color: '#0078D4',
        display: 'flex',
        alignItems: 'center',
        transition: theme.transitions.create(['transform', 'background-color'], {
            duration: theme.transitions.duration.shorter,
        }),
        '&:hover': {
            transform: 'scale(1.5)',
            color: '#005A9E',
        },
        borderRadius: '50%',
        backgroundColor: '#E5F1FB',
        padding: theme.spacing(1),
        fontSize: '2.7rem',
    },
}))