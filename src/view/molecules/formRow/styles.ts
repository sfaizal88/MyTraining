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
        alignItems: 'center'
    },
    viewFieldLabel: {
        paddingTop: spacing(0.5),
    },
    viewData: {
        fontSize: 13,
        fontWeight: 600,
    },
  }));
  
  export default useStyles;