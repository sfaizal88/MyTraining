/**
 * 
 * Box layout component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren} from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type BoxLayoutProps = {
    title: string;
}

const BoxLayout = ({
    title,
    children,
}: PropsWithChildren<BoxLayoutProps>) => {
    const classes = useStyles();
    return (
        <Box className={classes.boxLayout}>
            <Box className={classes.boxLayoutTag}>{title}</Box>
            {children}
        </Box>
    )
}

export default BoxLayout;