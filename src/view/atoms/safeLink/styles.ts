import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    primaryButton: {
        background: '#2c3e50',
        fontSize: 12,
        fontWeight: 600,
        color: '#fff',
        '&:hover': {
            background: '#2c3e50',
        }
    },
    secondaryButton: {
        background: '#fff',
        fontSize: 12,
        border: `1px solid '#2c3e50'`,
        fontWeight: 600,
        color: '#2c3e50',
        marginRight: '8px',
        '&:hover': {
            background: '#fff'
        }
    },
  }));
  
  export default useStyles;