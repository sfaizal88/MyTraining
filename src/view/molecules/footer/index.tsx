/**
 * 
 * Footer component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>&#169;Copyrights 2022 Training : All rights reserved.</Box>
    )
}

export default Footer;