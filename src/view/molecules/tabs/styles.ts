import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        flex: 1
    },
    tabContainer: {
        background: palette.background.paper,
    },
    tab: {
        padding: spacing(0.8, 1),
    },
    tabLabel: {
        color: '#48576c',
        fontSize: 12,
        fontWeight: 600,
        minWidth: '80px',
    },
    tabContentContainer: {
        padding: spacing(1, 3, 0, 3),
        margin: spacing(0.5, 0, 0, 0),
    },
    indicator: {
        backgroundColor: palette.primary.main,
        minWidth: '110px',
    },
    hidden: {
        display: 'none'
    }
  }));
  
  export default useStyles;