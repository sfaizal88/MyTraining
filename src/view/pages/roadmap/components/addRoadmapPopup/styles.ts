import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        root: '100%'
    },
    center: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerStart: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
}));
  
export default useStyles;