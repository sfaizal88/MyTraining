import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    paperLayout: {
        border: `1px solid ${palette.primary.light}`,
        boxShadow: '0 1px 1px #dfdfdf',
        padding: spacing(1, 1),
        margin: spacing(4),
        borderRadius: '10px',
        background: palette.background.paper,
        flex: 1
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
    tabContainer: {
        padding: spacing(2, 3),
        margin: spacing(0.5, 0, 1.5, 0),
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