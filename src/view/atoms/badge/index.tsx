/**
 * 
 * Badge component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Chip} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const badgeColorSet: Record<string, object> = {
  grey: {color: '#3A516B', backgroundColor: '#EDEFF3'},
  green: {color: '#255F07', backgroundColor: '#D3F8EA'},
  red: {color: '#950D0D', backgroundColor: '#FBE4E4'},
  yellow: {color: '#644C14', backgroundColor: '#F8F2D3'},
  blue: {color: '#3E5BAC', backgroundColor: '#EEF3FE'},
};

type BadgeProps = {
  status: string;
  statusDisplay: string;
  statusToColor: Record<string, string>;
}

const Badge = ({
  status,
  statusDisplay,
  statusToColor,
}: BadgeProps) => {
  const classes = useStyles();
  return (
    <Chip 
      label={statusDisplay} 
      classes={{
        root: classes.chipRoot,
        label: classes.label
      }} 
      style={badgeColorSet[statusToColor[status]]}/>
  )
}

export default Badge;