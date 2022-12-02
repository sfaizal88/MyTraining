import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    fieldSet: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        margin: spacing(1.5, 0),
        justifyContent: 'flex-end',
    },
    rowFieldSet: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        lineHeight: spacing(3.5),
        minWidth: 135,
        padding:  spacing(1.5, 2, 0, 0),
        display: 'flex',
    },
    field: {
        flex: 1,
    },
    required: {
        color: '#FA777C',
        fontSize: 15,
    },
    viewFormRow: {
        border: `1px solid ${palette.primary.light}`,
        borderRadius: '5px',
        background: '#ecf0f1',
        color: palette.background.default,
        paddingTop: spacing(1.5),
        paddingBottom: spacing(1.5),
        margin: spacing(0.5, 0)
    },
    viewFieldLabel: {
        paddingTop: spacing(0.5),
    }
  }));
  
  export default useStyles;