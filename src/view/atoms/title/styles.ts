import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette} : Theme) => ({
    title: {
        fontSize: 14,
        fontWeight: 600,
    },
    centerAlign: {
        textAlign: 'center',
    },
    rightAlign: {
        textAlign: 'right',
    }
  }));
  
  export default useStyles;