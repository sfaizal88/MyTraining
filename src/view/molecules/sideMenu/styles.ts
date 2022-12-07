import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    menuContainer: {
        width: '100%',
    },
    logoContainer: {
        padding: spacing(1.4, 2),
        textAlign: 'center',
        background: '#025b8b',
        marginBottom:  spacing(4),
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        width: 'inherit',
    },
    mainmenu: {
        listStyle: 'none',
        padding: spacing(0),
        margin: spacing(0)
    },
    mainMenuLabel: {
        textTransform: 'uppercase',
        fontWeight: 650,
        fontSize: 13,
        padding: spacing(0),
        margin: spacing(2, 0, 0, 4),
        height: 40,
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menuItem: {
        padding: spacing(1, 1, 1, 2),
        transition: 'all 0.5s linear',
        '&:hover': {
            color: palette.text.secondary,
            background: '#025b8b',
        },
        display: 'block'
    },
    menuItemActive: {
        color: palette.text.secondary,
        background: '#025b8b',
    },
    menuLink: {
        color: palette.background.paper,
        textDecoration: 'none',
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: '8px',
        '&:active': {
            color: palette.background.paper,
        },
        '&:visited': {
            color: palette.background.paper,
        }
    },
    menuIcon: {
        // color: palette.text.secondary,
        display: 'inline-block',
        width: '25px',
    },
    menuLabel: {
        // color: palette.text.secondary,
        fontWeight: 500,
        flex: 1,
        textAlign: 'left',
        lineHeight: '24px',
        marginLeft: spacing(1)
    },
    expand: {
        cursor: 'pointer',
        paddingRight: '8px'
    },
    submenu: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        width: 'inherit',
    },
    submenuItem: {
        padding: '8px 0 8px 12px',
        transition: 'all 0.5s linear',
        background: '#2c3e50',
        '&:hover': {
            color: palette.text.secondary,
            background: '#025b8b',
        }
    },
    profileContainer: {
        padding: spacing(0, 2, 0, 2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    profileTitle: {
        fontWeight: 600,
        textAlign: 'center'
    },
    profileTag: {

    }
  }));
  
  export default useStyles;