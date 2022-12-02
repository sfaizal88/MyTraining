import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    noRecordContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        color: palette.text.secondary,
        padding: spacing(7, 0)
    },
    title: {
        flex: 1,
        fontSize: 15,
        fontWeight: 600,
        marginTop: spacing(1),
        textTransform: 'uppercase',
    },
    pageNotFound: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        color: palette.text.secondary,
        padding: spacing(7, 0),
        marginTop: '10%'
    },
    pageNotFoundTitle: {
        flex: 1,
        fontWeight: 600,
        marginTop: spacing(2),
        textTransform: 'uppercase',
        minHeight: '100%',
    },
    errorMessage: {
        color: palette.error.main,
        fontSize: '12px',
        marginTop: spacing(0.5),
    },
  }));
  
  export default useStyles;