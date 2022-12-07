import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    noRecordContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        color: palette.text.secondary,
        padding: spacing(7, 0),
        "& .MuiSvgIcon-root": {
            fontSize: 70, 
        }
    },
    title: {
        flex: 1,
        fontSize: 15,
        fontWeight: 600,
        marginTop: spacing(1),
        textTransform: 'uppercase',
    },
    subtitle: {
        flex: 1,
        fontSize: 13,
        color: '#707070',
        margin: spacing(1, 0, 2, 0),
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
    errorLabel: {
        color: '#707070',
        fontSize: 14,
        fontStyle: 'italic',
    }
  }));
  
  export default useStyles;