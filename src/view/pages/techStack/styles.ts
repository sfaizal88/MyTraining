import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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