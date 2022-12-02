/**
 * 
 * Table row component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {PropsWithChildren} from 'react';
import {Grid} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type TableRowProps = {
    externalClasses?: string;
    spacing?: number;
}

const TableRow = ({
    externalClasses,
    children,
    spacing,
}: PropsWithChildren<TableRowProps>) => {
    const classes = useStyles();
    return (
        <Grid container className={clsx(classes.row, externalClasses)} spacing={spacing || 0}>
            {children}
        </Grid>
    )
}

export default TableRow;