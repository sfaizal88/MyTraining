/**
 * 
 * Header component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar} from '@mui/material';
import {SettingsOutlined} from '@mui/icons-material';
    
// ICON IMPORT
import UserIcon from '@/assets/img/user.jpeg';

// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <Box flex={1}></Box>
            <Box flex={1}></Box>
            <Box flex={1}></Box>
            <Box flex={1} display='inline-flex' justifyContent='flex-end' alignItems='center'>
                <Avatar src={UserIcon} sx={{ width: 30, height: 30, marginRight: '10px' }}/>Ahamed Faizal </Box>
            <Box width={60} display='inline-flex' justifyContent='center'>
                <SettingsOutlined style={{fontSize: 25}}/>
            </Box>
        </Box>
    )
}

export default Header;