import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
    },
    footerButtonsBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
}));
  
export default useStyles;