import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    pageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: '#2980b9',
        fontWeight: 500,
        display: 'inline-block',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    actionContainer: {
        flex: 1,
    }
}));
  
export default useStyles;