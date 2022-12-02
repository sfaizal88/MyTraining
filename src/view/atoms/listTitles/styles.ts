import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette} : Theme) => ({
    headerRow: {
        color: palette.background.paper,
        padding: spacing(1, 1.5),
        fontSize: 10,
        background: '#2c3e50',
        fontWeight: 600,
        borderRadius: '5px',
        paddingLeft: spacing(2),
    },
  }));
  
  export default useStyles;