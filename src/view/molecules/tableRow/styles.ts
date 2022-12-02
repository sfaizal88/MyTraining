import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    row: {
        border: `1px solid ${palette.primary.light}`,
        borderRadius: '8px',
        fontSize: 13,
        padding: spacing(1, 1.5),
        marginTop: spacing(1),
        boxShadow: '0 1px 1px #f1f1f1',
        transition: 'all 0.5s linear',
        '&:hover': {
            borderColor: palette.primary.main,
            cursor: 'pointer',
        },
        lineHeight: '36px',
    },
    rowRight: {
        textAlign: 'right',
        paddingRight: spacing(1)
    },
}));
  
  export default useStyles;