import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    loaderContainer: {
        background: 'rgba(0, 0, 0, .1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        zIndex: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        margin: "auto"
    },
  }));
  
  export default useStyles;