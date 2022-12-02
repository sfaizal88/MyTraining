import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
    menuContainer: {
        width: '100%',
    },
    logoContainer: {
        padding: spacing(3, 2),
        textAlign: 'center'
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        width: 'inherit',
    },
    menuItem: {
        padding: spacing(1, 1, 1, 2),
        transition: 'all 0.5s linear',
        '&:hover': {
            color: palette.text.secondary,
            background: '#ecf0f1',
        },
        display: 'block'
    },
    menuItemActive: {
        color: palette.text.secondary,
        background: '#ecf0f1',
    },
    menuLink: {
        textDecoration: 'none',
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: '8px',
        '&:visited': {
            color: '#fff',
        }
    },
    menuIcon: {
        color: palette.text.secondary,
        // color: '#6e768e',
        display: 'inline-block',
        width: '25px',
    },
    menuLabel: {
        color: palette.text.secondary,
        // color: '#6e768e',
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
            background: '#ecf0f1',
        }
    },
    profileContainer: {
        padding: spacing(0, 2, 3, 2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    profileTitle: {
        fontWeight: 600
    },
    profileTag: {

    }
  }));
  
  export default useStyles;