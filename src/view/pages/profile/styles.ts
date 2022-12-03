import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    profileContentLayout: {
        padding: spacing(3, 4, 4, 4)
    },
    profileHeader: {
        background: palette.background.paper,
        padding: spacing(3, 5),
        display: 'flex',
    },
    profileContent: {
        padding: spacing(0, 3),
        alignItems: 'flex-start',
        justifyContent: 'center',
        display: 'inline-flex',
        flexDirection: 'column',
        flex: 1,
    },
    profileTitle: {
        fontSize: 20,
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    profileDetails: {
        fontSize: 13,
        fontWeight: 500,
    },
    profileBtnContainer: {
        width: '150px',
        textAlign: 'right'
    }
}));
  
export default useStyles;