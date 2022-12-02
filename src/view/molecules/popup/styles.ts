import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    title: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: spacing(0.5)
    },
    actionRow: {
        marginTop: spacing(-2)
    },
    popupBody: {
        margin: spacing(3, 1, 9, 1),
    },
    popupHeader: {
        borderBottom: `1px solid ${palette.primary.light}`,
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
        position: 'absolute',
        bottom: 0,
        background: palette.background.paper,
        width: '100%',
        boxSizing: 'border-box',
        left: 0,
        padding: spacing(2, 3),
        borderTop: `1px solid ${palette.primary.light}`,
    },
  }));
  
  export default useStyles;