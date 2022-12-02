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
  right?: boolean;
}

const Title = ({
    title,
    center,
    right,
}: TitleProps) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.title, center && classes.centerAlign, right && classes.rightAlign)}>
    {title}
    </Box>
  )
}

export default Title;