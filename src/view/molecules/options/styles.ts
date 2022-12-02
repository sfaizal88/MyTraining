import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing}: Theme) => ({
    formActionContainer: {
        marginTop: spacing(2),
    },
    formActionEmpty: {
        flex: 1
    },
    secondBtn: {
        textAlign: 'right',
    },
    fullWidth: {
        width: '100%'
    },
    menuItem: {
        fontSize: '13px !important',
    },
    delete: {
        color: '#e74c3c !important'
    }
  }));
  
  export default useStyles;