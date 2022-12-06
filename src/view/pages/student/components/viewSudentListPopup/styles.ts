import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        textDecoration: 'none',
        "&:hover": {
            textDecoration: 'underline'
        }
    }
}));
  
export default useStyles;