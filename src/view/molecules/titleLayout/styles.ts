import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        display: 'flex',
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        fontSize: 15,
        fontWeight: 600,
        margin: spacing(1, 0),
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    info: {
        color: '#707070',
        fontWeight: 500,
        fontSize: 13,
        marginLeft: spacing(1),
        paddingRight: spacing(1),
    },
    rightChild: {
        flex: 1,
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
  }));
  
  export default useStyles;