import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    viewTitle: {
        fontSize: 16,
        fontWeight: 600
    },
    viewDetails: {
        fontSize: 14,
        fontWeight: 500,
        color: '#707070',
        padding: spacing(0.5, 0),
        lineHeight: '19px',
    },
    viewSubtitle: {
        fontSize: 13,
        fontWeight: 600,
        color: '#3A516B'
    },
    viewFooter: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: spacing(2),
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        width: '100%'
    },
    viewDuration: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 12
    },
    link: {
        color: '#2980b9',
        fontWeight: 500,
        display: 'inline-block',
        fontSize: 13,
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
}));
  
export default useStyles;