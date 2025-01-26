import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

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
        backgroundColor: '#FFF3E0',
        padding: theme.spacing(1),
        fontSize: '2.5rem',
    },
    wikiIcon: {
        color: '#4CAF50',
        '&:hover': {
            color: '#388E3C',
        },
        borderRadius: '30%',
        backgroundColor: '#E8F5E9',
        padding: theme.spacing(1),
        fontSize: '2.5rem',
    },
}))