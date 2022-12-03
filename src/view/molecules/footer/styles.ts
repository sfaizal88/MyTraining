import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        height: '40px',
        fontSize: 12,
        boxSizing: 'border-box',
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: `2px 2px 2px ${palette.background.paper}`

    },
}));
  
  export default useStyles;