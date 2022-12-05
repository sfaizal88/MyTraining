import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    primaryButton: {
        background: '#2c3e50',
        fontSize: 12,
        fontWeight: 600,
        color: palette.background.paper,
        '&:hover': {
            background: '#2c3e50',
        }
    },
    secondaryButton: {
        background: palette.background.paper,
        fontSize: 12,
        border: `1px solid '#2c3e50'`,
        fontWeight: 600,
        color: '#2c3e50',
        marginRight: '8px',
        '&:hover': {
            background: palette.background.paper,
        }
    },
  }));
  
  export default useStyles;
