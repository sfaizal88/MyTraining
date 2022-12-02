import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    paperLayout: {
        border: `1px solid ${palette.primary.light}`,
        boxShadow: '0 1px 1px #dfdfdf',
        padding: spacing(1, 1),
        margin: spacing(4),
        borderRadius: '10px',
    },
    tab: {
        color: '#48576c',
        fontSize: 12,
        fontWeight: 600,
        padding: spacing(0.8, 0.25),
        minWidth: '110px',
    },
    tabContainer: {
        padding: spacing(2, 3),
        margin: spacing(0.5, 0, 1.5, 0),
    },
    indicator: {
        backgroundColor: palette.primary.main,
        minWidth: '110px',
    }
  }));
  
  export default useStyles;