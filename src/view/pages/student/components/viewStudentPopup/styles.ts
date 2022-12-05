import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
    },
    viewFieldSet: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: spacing(1, 0),
        fontSize: 13,
        color: '#707070',
    },
    viewAvatar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
  
export default useStyles;