import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing}: Theme) => ({
    title: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: spacing(0.5)
    },
    actionRow: {
        marginTop: spacing(-2)
    }
  }));
  
  export default useStyles;