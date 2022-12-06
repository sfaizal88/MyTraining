/**
 * 
 * Header component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';
import {Box} from '@mui/material';
import {SettingsOutlined, MenuOutlined} from '@mui/icons-material';
    
// GENERIC COMPONENT
import {Avatar} from '@/view/atoms';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // CONTEXT DECALRE
    const userContext = useContext(UserContext);

    return (
        <Box className={classes.header}>
            <Box flex={1} className={classes.menuIcon}><MenuOutlined style={{fontSize: 25}}/></Box>
            <Box flex={1}></Box>
            <Box flex={1}></Box>
            <Box flex={1} className={classes.profileContainer}>
                <Avatar label={userContext.name[0]} mr={'8px'}/>{userContext.name}</Box>
            <Box width={60} display='inline-flex' justifyContent='center'>
                <SettingsOutlined style={{fontSize: 25}}/>
            </Box>
        </Box>
    )
}

export default Header;