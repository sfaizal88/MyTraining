import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    header: {
        background: palette.background.paper,
        display: 'flex',
        flexDirection: 'row',
        left: 0,
        flex: 1,
        height: '50px',
        boxSizing: 'border-box',
        position: 'fixed',
        width: '100%',
        zIndex: 3,
        boxShadow: '1px 1px 3px #d4d4d4',
        alignItems: 'center',
        padding: spacing(0, 1, 0, 2),
        paddingLeft: spacing(33)
    },
    profileContainer: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 600
    },
    listItemIcon: {
        minWidth: '30px',
    },
    
}));
  
  export default useStyles;