/**
 * 
 * Page not found component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Typography} from '@mui/material';
import {BlockOutlined} from '@mui/icons-material';

// STYLE IMPORT
import useStyles from './styles';

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <Box className={classes.pageNotFound}>
            <BlockOutlined style={{fontSize: 100}}/>
            <Typography variant="h6" className={classes.pageNotFoundTitle}>Page not found</Typography>
        </Box>
    )
}

export default PageNotFound;