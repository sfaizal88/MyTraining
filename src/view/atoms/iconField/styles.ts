import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    root: {
        "& .MuiSvgIcon-root": {
            color: '#707070',
            fontSize: 21, 
            marginRight: spacing(0.5),
            cursor: 'pointer',
            '&:hover': {
                color: palette.primary.main,
            }
        }
    },
    
  }));
  
  export default useStyles;