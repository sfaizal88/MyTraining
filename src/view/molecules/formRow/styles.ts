import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    fieldSet: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: spacing(1.5, 0),
        justifyContent: 'flex-end',
    },
    rowFieldSet: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: spacing(0.5, 0),
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        minWidth: 135,
        padding:  spacing(0.5, 2, 0, 0),
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },
    viewFieldLabel: {
    },
    rowFieldLabel: {
        paddingBottom: spacing(0.5)
    },
    viewData: {
        fontSize: 13,
        fontWeight: 600,
        color: '#707070'
    },
  }));
  
  export default useStyles;