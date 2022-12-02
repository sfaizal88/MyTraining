import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    pageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        border: `1px solid ${palette.primary.light}`,
        borderRadius: spacing(1),
        padding: spacing(3, 4, 5, 4),
        width: '300px'
    }
}));
  
export default useStyles;