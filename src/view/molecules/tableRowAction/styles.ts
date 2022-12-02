import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    rowRight: {
        textAlign: 'right',
        paddingRight: spacing(1)
    },
    actionLinkContainer: {
        color: palette.text.secondary,
        fontSize: 13
    },
    actionLink: {
        color: palette.text.hint,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        margin: spacing(0, 0.5),
    },
    deleteActionLink: {
        color: palette.error.main,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        margin: spacing(0, 0.5),
    },
}));
  
  export default useStyles;