import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    inputFieldContainer: {
        width: '100%',
        borderRadius: spacing(1),
        '& .MuiInputBase-root': {
            fontSize: '13px',
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                
            }
        },
    },
    root: {
        background: palette.secondary.light,
        padding: spacing(1, 0),
        height: '40px',
        '&:hover': {
            border: 'none',
        }
    },
    multilineRow: {
        background: palette.secondary.light,
        padding: spacing(1, 2),
        height: 'auto',
        '&:hover': {
            border: 'none',
        }
    },
    notchedOutline: {
        border: 'none',
    },
  }));
  
  export default useStyles;