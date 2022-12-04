import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette, spacing}: Theme) => ({
    grid4: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        boxSizing: 'border-box',
        columnGap: spacing(2),
        rowGap: spacing(2),
    },
}));
  
export default useStyles;