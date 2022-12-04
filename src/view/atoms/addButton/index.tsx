/**
 * 
 * Add button component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {AddCircleOutlineOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Button} from '@/view/atoms';

// STYLE IMPORT
import useStyles from './styles';

export type AddButtonProps = {
  label?: string;
  customLabel?: string;
  icon?: ReactElement | null;
  onClick: () => void;
  type?: 'link' | 'button'
}

// ADD BUTTON COMPONENT DECLARE
const AddButton = ({
  label,
  customLabel,
  type = "link",
  icon = <AddCircleOutlineOutlined style={{fontSize: 24, marginRight: '8px'}}/>,
  onClick,
}: AddButtonProps) => {
  // STYLE DECLARE
  const classes = useStyles();
  return (
    <>
      {type === 'link' ? 
        <Box className={classes.root} onClick={onClick}>
          {icon}  {customLabel || `Add ${label}`}
        </Box> : 
        <Button  variant="contained" onClick={onClick}>
          {icon}  {customLabel || `Add ${label}`}
        </Button>
      }
    </>
  );
};

export default AddButton;
