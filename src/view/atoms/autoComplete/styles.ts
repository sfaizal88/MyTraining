import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    autoCompleteRoot: {
        paddingTop: spacing(0),
    },
    inputField: {
        borderRadius: spacing(1),
        '& .MuiInputBase-root': {
            fontSize: '13px',
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
            }
        },
    },
    autoCompleteInputContainer: {
        background: palette.secondary.light,
        padding: spacing(0),
        minHeight: '40px',
        '&:hover': {
            border: 'none',
        }
    },
    notchedOutline: {
        border: 'none',
    },
    optionItem: {
        fontSize: 14
    }
  }));
  
  export default useStyles;