import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    no: {
        width: '20px',
        height: '20px',
        background: palette.background.paper,
        borderRadius: '100%',
        color: '#2c3e50',
        textAlign: 'center',
        lineHeight: '19px',
        marginRight: spacing(1)
    },
    expand: {
        paddingRight: '8px',
        width: '50px',
        textAlign: 'right'
    },
    collapseHeader: {
        display: 'flex',
        color: palette.background.paper,
        padding: spacing(1, 1.5, 1.5, 2),
        fontSize: 13,
        background: '#2c3e50',
        fontWeight: 600,
        borderRadius: '5px',
        alignItems: 'center',
        cursor: 'pointer',
    },
    collapseBody: {
        display: 'flex',
        padding: spacing(0, 2),
    }
}));
  
export default useStyles;