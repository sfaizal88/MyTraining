import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    profileContentLayout: {
        height: '100%',
        boxSizing: 'border-box'
    },
    footer: {
        // position: 'sticky',
        bottom: 0,
        background: palette.background.paper,
        width: '100%',
        boxSizing: 'border-box',
        left: 0,
        padding: spacing(2, 3),
        borderTop: `1px solid ${palette.primary.light}`,
        height: '70px',
    },
    content: {
        flex: 1,
        display: 'flex', 
        flexDirection: 'column',
        overflowY: 'auto',
    },
}));
  
export default useStyles;