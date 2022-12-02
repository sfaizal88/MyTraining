/**
 * 
 * Table row action component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren} from 'react';
import {Grid, GridSize, Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type TableRowActionProps = {
    width: (boolean | GridSize);
}

const TableRowAction = ({
    width,
    children,
}: PropsWithChildren<TableRowActionProps>) => {
    const classes = useStyles();
    return (
    <Grid item xs={width} className={classes.rowRight}>
        <Box className={classes.actionLinkContainer}>
            {children}
        </Box>
    </Grid>)
}

export default TableRowAction;