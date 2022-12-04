import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    link: {
        color: '#2980b9',
        fontWeight: 500,
        display: 'inline-block',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    actionContainer: {
        width: '20px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        border: `1px solid ${palette.primary.light}`,
        borderRadius: spacing(1),
        padding: spacing(2),
        position: 'relative',
        '&:hover': {
            borderColor: palette.primary.main,
            cursor: 'pointer',
        },
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        boxSizing: 'border-box',
        width: '100%'
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 600,
        flex: 1,
        alignItems: 'center',
        display: 'inline-flex',
        marginBottom: spacing(0.5)
    },
    cardSubtitle: {
        fontSize: 13,
        fontWeight: 600,
        color: '#3A516B'
    },
    cardDetails: {
        fontSize: 12,
        fontWeight: 500,
        color: '#707070',
        padding: spacing(2, 0),
    },
    cardFooter: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        width: '100%'
    },
    cardDuration: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 12
    },
    cardBadge: {
        position: 'absolute',
        display: 'inline-flex',
        top: spacing(-1.5),
        zIndex: 2
    },

}));
  
export default useStyles;