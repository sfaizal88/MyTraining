/**
 * 
 * Page title / section title component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// PROPS TYPE
type TitleProps = {
  title: string;
  center?: boolean;
}

const Title = ({
    title,
    center,
}: TitleProps) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.title, center && classes.centerAlign)}>
    {title}
    </Box>
  )
}

export default Title;