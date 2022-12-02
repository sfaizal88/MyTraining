import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    boxLayout: {
        border: `1px solid ${palette.primary.light}`,
        margin: spacing(1),
        borderRadius: 5,
        padding: spacing(2),
        position: 'relative'
    },
    boxLayoutTag: {
      position: 'absolute', 
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 600,
      color: palette.background.paper,
      background: palette.background.default,
      padding: spacing(1, 1.5),
      borderRadius: '20px',
      textTransform: 'uppercase',
      top: spacing(-1.5)
    },
  }));
  
  export default useStyles;