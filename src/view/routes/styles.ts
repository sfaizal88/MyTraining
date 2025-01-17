import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette}: Theme) => ({
  mainLayout: {
    minHeight: '100%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
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
    background: '#007bb3',
    color: '#fff'
  },
  bodyContent: {
    flex: 1,
    paddingTop: '50px',
    display: 'flex',
  }
}));
  
export default useStyles;