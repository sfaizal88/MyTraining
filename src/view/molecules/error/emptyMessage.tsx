/**
 * 
 * Error message component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type EmptyMessageProps = {
    message: string;
    isShow: boolean;
}

const EmptyMessage = ({
    message,
    isShow,
}: EmptyMessageProps) => {
    const classes = useStyles();
    return (<>{isShow && <Box className={classes.errorMessage}>{message}</Box>}</>)
}

export default EmptyMessage;