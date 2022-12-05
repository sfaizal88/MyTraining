import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    label: {
        paddingTop: spacing(0),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 400,
    },
    checkboxRoot: {
        width: '14px',
        height: '14px',
        marginRight: spacing(0.5),
    },
  }));
  
  export default useStyles;