/**
 * 
 * Popup footer component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {
    Box,
} from '@mui/material';
import {PropsWithChildren} from 'react';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type PopupProps = {
    fullScreen?: boolean;
}

const PopupFooter = ({
    children,
}: PropsWithChildren<PopupProps>) => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
           {children}
        </Box>
    )
}

export default PopupFooter;