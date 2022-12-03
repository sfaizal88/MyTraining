import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        margin: spacing(1, 0),
        gap: spacing(1)
    },
    profileContainer: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 600
    }
}));
  
  export default useStyles;