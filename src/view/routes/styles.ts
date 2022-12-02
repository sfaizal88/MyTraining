import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
  mainLayout: {
    height: '100%',
    display: 'flex',
    width: '100%',
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '100vh',
    paddingLeft: '240px',
    background: '#ecf0f1',
    boxShadow: '1px 1px 3px #d4d4d4',
  },
  sideMenu: {
    width: '240px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: 4,
    left: 0,
    background: '#fff'
  },
  bodyContent: {
    flex: 1,
    paddingTop: '60px'
  }
}));
  
export default useStyles;