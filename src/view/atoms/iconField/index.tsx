/**
 * 
 * Icon Field component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {ReactElement} from 'react';
import {Link, Tooltip} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type IconFieldProps = {
  link: string;
  icon: ReactElement;
  tooltip?: string
}
const IconField = ({
  link,
  icon,
  tooltip = '',
}: IconFieldProps) => {
  const classes = useStyles();

  return (
    <Tooltip title={tooltip}><Link target="_blank" href={link} underline="none" className={classes.root}>{icon}</Link></Tooltip>
  )
}

export default IconField;