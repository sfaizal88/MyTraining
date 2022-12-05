import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette} : Theme) => ({
    primaryButton: {
        background: palette.primary.main,
        color: palette.background.paper,
        width: '100%',
        boxSizing: 'border-box',
        '&:hover': {
            color: palette.background.paper,
            background: palette.primary.main,
        }
    },
    secondaryButton: {
        background: palette.background.paper,
        border: `1px solid ${palette.primary.main}`,
        color: palette.primary.main,
        marginRight: spacing(1),
        width: '100%',
        boxSizing: 'border-box',
        '&:hover': {
            color: palette.primary.main,
            background: palette.background.paper
        }
    },
    buttonLabel: {
        fontWeight: 600,
        fontSize: 12,
        textTransform: 'capitalize',
    }
  }));
  
  export default useStyles;