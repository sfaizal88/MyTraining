import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing}: Theme) => ({
    alertTitle: {
        fontSize: 17,
        fontWeight: 600,
        marginBottom: spacing(0.5),
    },
    alertContent: {
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        padding: `${spacing(1, 3, 3, 3)} !important`
    },
    titleContainer: {
        padding:  spacing(1.5, 2)
    },
    confirmContent: {
        textAlign: 'center',
    },
    bodyTitle: {
        fontSize: 15,
        fontWeight: 500,
        padding: spacing(2, 0, 1, 0)
    },
    bodyDetails: {
        fontSize: 13,
        fontWeight: 500,
        color: '#707070',
        padding: spacing(0, 5, 2, 5)
    }
  }));
  
  export default useStyles;