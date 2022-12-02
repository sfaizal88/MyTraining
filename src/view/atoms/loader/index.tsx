/**
 * 
 * Page loader component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// ICON IMPORT
import LoaderIcon from '@/assets/icons/loader.svg';

// STYLE IMPORT
import useStyles from './styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loaderContainer}> 
      <img src={LoaderIcon}  alt="Loading..." width={100}/>
    </Box>
  )
}

export default Loader;