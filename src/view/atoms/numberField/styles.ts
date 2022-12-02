import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    inputFieldContainer: {
        background: palette.secondary.light,
        width: '100%',
        borderRadius: spacing(1),
        '& .MuiInputBase-root': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                
            }
        },
    },
    root: {
        padding: spacing(1, 0),
        height: '40px',
        fontSize: 14,
        '&:hover': {
            border: 'none',
        }
    },
    notchedOutline: {
        border: 'none',
    },
  }));
  
  export default useStyles;