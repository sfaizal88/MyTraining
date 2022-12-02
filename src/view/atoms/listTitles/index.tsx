/**
 * 
 * List title component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren} from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// PROPS TYPE
type ListTitlesProps = {
  hasDnd?: boolean;
};

const ListTitles = ({children}: PropsWithChildren<ListTitlesProps>) => {
  const classes = useStyles();
  return(
    <Box mb={1} mt={1.5} className={classes.headerRow}>
      {children}
    </Box>
  );
}

export default ListTitles;