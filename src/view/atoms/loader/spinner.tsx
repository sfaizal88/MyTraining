/**
 * 
 * Page spinner component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';
import { usePromiseTracker } from "react-promise-tracker";

// ICON IMPORT
import LoaderIcon from '@/assets/icons/loader.svg';

// STYLE IMPORT
import useStyles from './styles';

const Spinner = () => {
  const classes = useStyles();
  const { promiseInProgress } = usePromiseTracker();
  
  return (
    <>{promiseInProgress && <Box className={classes.loaderContainer}> 
      <img src={LoaderIcon}  alt="Loading..." width={100}/>
    </Box>
    }</>
  )
}

export default Spinner;