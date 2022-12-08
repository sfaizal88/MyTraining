import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    profileContentLayout: {
        flex: 1,
        paddingTop: spacing(3)
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
        color: '#707070',
    },
    profileBtnContainer: {
        flex: 1,
        textAlign: 'right',
    },
    grid4: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        boxSizing: 'border-box',
        columnGap: spacing(2),
        rowGap: spacing(2),
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        height: '100%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        background: palette.background.paper,
        width: '100%',
        boxSizing: 'border-box',
        left: 0,
        padding: spacing(2, 3),
        borderTop: `1px solid ${palette.primary.light}`,
        height: '70px',
    },
    content: {
        flex: 1,
        padding: spacing(3, 4, 4, 4),
    }
}));
  
export default useStyles;