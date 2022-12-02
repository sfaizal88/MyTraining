import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    chipTechBox: {
        display: 'inline-flex',
        border: `1px solid ${palette.primary.light}`,
        borderRadius: '25px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: spacing(0.5, 1.5),
        fontWeight: 500,
        gap: spacing(0.5),
        color: '#4a5255',
        '&:hover': {
            borderColor: '#09a469',
            cursor: 'pointer'
        }
    },
    videoIcon: {
        '&:hover': {
            color: '#f70000',
            cursor: 'pointer'
        }
    },
    tutorialIcon: {
        '&:hover': {
            color: '#09a469',
            cursor: 'pointer'
        }
    }
  }));
  
  export default useStyles;