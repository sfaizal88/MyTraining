/**
 * 
 * Side menu component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import omit from 'lodash/omit';
import {useState, useEffect, MouseEvent} from 'react';
import {Box, Collapse, Avatar, Typography} from '@mui/material';
import {KeyboardArrowDownOutlined, KeyboardArrowUpOutlined} from '@mui/icons-material';
import clsx from 'clsx';
import { Link, useLocation } from "react-router-dom";

// ICON IMPORT
import LogoIcon from '@/assets/img/logo_1.png';
import UserIcon from '@/assets/img/user.jpeg';

// ROUTER IMPORT
import {MenuType, SubMenuType} from '@/view/routes/type';
import {menuList} from '@/view/routes/constants';

// GENERIC COMPONENT
import {Loader, SafeLink} from '@/view/atoms';

// STYLE IMPORT
import useStyles from './styles';

const SideMenu = () => {
    const classes = useStyles();

    // LOCATION VAR
    const location = useLocation();

    // STATE
    const [loading, setLoading] = useState(true);
    const [opened, setOpened] = useState({} as Record<string, boolean>);
    const [currentMenu, setCurrentMenu] = useState<string>(location.pathname);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 600);
        setCurrentMenu(location.pathname);
    }, [currentMenu, location.pathname]);

    const submenuOpen = (event: MouseEvent<SVGSVGElement>, menuId: string) => {
        event.stopPropagation();
        event.preventDefault();
        setOpened((state) =>
            state[menuId] ? omit(state, menuId) : {...state, [menuId]: true},
        )
    }

    const isMenuActive = (sublink: string) => {
        if (sublink) {
            const sublinkPathName = sublink.split("/")[1];
            const currentMenuPathName = currentMenu.split("/")[1];
            return sublinkPathName === currentMenuPathName;
        }
        return false;
    }

    return (
        <Box className={classes.menuContainer}>
            <Box className={classes.logoContainer}>
                <img src={LogoIcon}  alt="Loading..." height={25}/>
            </Box>
            <Box className={classes.profileContainer}>
                <Avatar src={UserIcon} sx={{ width: 100, height: 100 }}/>
                <Typography mt={1} variant="h6" className={classes.profileTitle}>Ahamed Faizal</Typography>
                <Typography variant="caption" className={classes.profileTag}>Front End Developer</Typography>
            </Box>
            {loading && <Loader/>}
            <ul className={classes.menu}>
                {menuList.map((menu: MenuType) => {
                    return (
                        <Box key={menu.id}>
                                <li>
                                    <Box onClick={() => setCurrentMenu(menu.link)} className={clsx(classes.menuItem, isMenuActive(menu.subLinks) && classes.menuItemActive)}>
                                        <SafeLink to={menu.link} className={classes.menuLink}>
                                            <Box className={classes.menuIcon}>{menu.icon}</Box>
                                            <Box className={classes.menuLabel}>{menu.label}</Box>
                                            {menu.submenuList.length > 0 && (
                                                <Box className={classes.expand}>
                                                    {opened[menu.id] ? <KeyboardArrowUpOutlined 
                                                        onClick={(event) => submenuOpen(event, menu.id)}
                                                    /> :
                                                    <KeyboardArrowDownOutlined 
                                                        onClick={(event) => submenuOpen(event, menu.id)}
                                                    />}
                                                </Box>
                                            )}
                                        </SafeLink>
                                    </Box>
                                    {menu.submenuList.length > 0 && (
                                        <Collapse in={opened[menu.id]} timeout="auto" unmountOnExit>
                                            <ul className={classes.submenu}>
                                                {menu.submenuList.map((item: SubMenuType) => (
                                                    <li key={item.id}>
                                                        <Box onClick={() => setCurrentMenu(item.subLinks)} className={clsx(classes.submenuItem, isMenuActive(item.subLinks) && classes.menuItemActive)}>
                                                            <Link to={item.link} className={classes.menuLink}>
                                                                <Box className={classes.menuIcon}>{item.icon}</Box>
                                                                <Box className={classes.menuLabel}>{item.label}</Box>
                                                            </Link>
                                                        </Box>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Collapse>
                                    )}
                                </li>
                        </Box>
                    )
                })}
            </ul> 
        </Box>
    )
}

export default SideMenu;