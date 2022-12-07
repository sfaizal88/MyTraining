/**
 * 
 * Header component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext, useState} from 'react';
import {Box, Menu, MenuItem, ListItemIcon} from '@mui/material';
import {SettingsOutlined, MenuOutlined, PowerSettingsNewOutlined, LogoutOutlined} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
    
// GENERIC COMPONENT
import {Avatar} from '@/view/atoms';
import {ConfirmPopup} from '@/view/molecules';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// ROUTER IMPORT
import * as PATH from '@/view/routes/constants';

// UTILS IMPORT 
import {clearStorage} from '@/utils/helper';

// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    // DECLARE STYLE
    const classes = useStyles();
    
    // NAVIGATOR
    const navigate = useNavigate();

    // CONTEXT DECALRE
    const userContext = useContext(UserContext);

    // DECLARE STATE
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLogoutConfirm, setLogoutConfirm] = useState<boolean>(false);

    // GENERIC VAR DECLARE
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutClick = () => {
        setLogoutConfirm(true);
    };

    const onConfirmLogout = () => {
        clearStorage();
        navigate(PATH.LOGIN_PATH);
    }

    return (
        <Box className={classes.header}>
            <Box flex={1} className={classes.menuIcon}><MenuOutlined style={{fontSize: 25}}/></Box>
            <Box flex={1}></Box>
            <Box flex={1}></Box>
            <Box flex={1} className={classes.profileContainer}>
                <Avatar label={userContext.name[0]} mr={'8px'}/>{userContext.name}</Box>
            <Box width={60} display='inline-flex' justifyContent='center' onClick={handleClick}>
                <SettingsOutlined style={{fontSize: 25}}/>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    style: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            marginTop: 5,
                            border: '1px solid #EDEFFC',
                        },
                    }
                }
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem  onClick={logoutClick}>
                        <ListItemIcon className={classes.listItemIcon}>
                            <PowerSettingsNewOutlined fontSize="small" />
                        </ListItemIcon>
                        Logout
                </MenuItem>
            </Menu>bodyIcon
            {isLogoutConfirm && (
                <ConfirmPopup 
                    isOpen={isLogoutConfirm}
                    title="Logout" 
                    icon={<LogoutOutlined/>}
                    onClose={() => setLogoutConfirm(false)} 
                    onSubmit={onConfirmLogout}
                    submitLabel="Logout"
                    content="Do you wish to logout?"
                    details="This action cannot be undone and will be logout."
                />
            )}
        </Box>
    )
}

export default Header;