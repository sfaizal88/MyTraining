import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    paperLayoutWrapper: {
        boxShadow: '1px 1px 3px #d4d4d4',
        padding: spacing(3, 4, 4, 4),
        margin: spacing(3),
        borderRadius: spacing(1),
        background: palette.background.paper,
        flex: 1,
    },
    title: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: spacing(0.5)
    },
    info: {
        fontSize: 12,
        color: palette.text.secondary,
    },
    paperLayoutContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderBottom: `1px solid ${palette.primary.light}`,
        marginBottom: spacing(4),
        paddingBottom: spacing(1),
    },
    header: {
        flex: 1,
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    plusIcon: {
        marginRight: spacing(0.5)
    }
  }));
  
  export default useStyles;