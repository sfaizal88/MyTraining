import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    alertTitle: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: spacing(0.5),
    },
    alertContent: {
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center'
    },
    titleContainer: {
        padding:  spacing(1.5, 2)
    }
  }));
  
  export default useStyles;