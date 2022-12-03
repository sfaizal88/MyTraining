import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    title: {
        fontSize: 15,
        fontWeight: '600',
    },
    content: {
        fontSize: 13,
        color: '#707070'
    },
    date: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 13,
    }
}));
  
  export default useStyles;