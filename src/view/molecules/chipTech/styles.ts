import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    chipTechBox: {
        display: 'inline-flex',
        border: `1px solid ${palette.primary.light}`,
        boxShadow: '0 1px 1px #f1f1f1',
        padding: spacing(1, 1.5),
        borderRadius: '8px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        "&:hover": {
            borderColor: palette.primary.main,
            cursor: 'pointer',
        },
    },
    chipLabel: {
        fontSize: 14,
        fontWeight: 400,
    }
  }));
  
  export default useStyles;