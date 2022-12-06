/**
 * 
 * Add button component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
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
  type?: 'link' | 'button',
  hide?: boolean;
  direction?: 'flex-start' | 'center' | 'flex-end'
}

// ADD BUTTON COMPONENT DECLARE
const AddButton = ({
  label,
  customLabel,
  type = "link",
  icon = <AddCircleOutlineOutlined style={{fontSize: 24, marginRight: '8px'}}/>,
  hide,
  onClick,
  direction = 'flex-start',
}: AddButtonProps) => {
  // STYLE DECLARE
  const classes = useStyles();
  return (
    <>
      {type === 'link' ? 
        <Box className={clsx(classes.root, hide && classes.hide)} onClick={onClick} justifyContent={direction}>
          {icon}  {customLabel || `Add ${label}`}
        </Box> : 
        <Button className={clsx(hide && classes.hide)} variant="contained" onClick={onClick} justifyContent={direction}>
          {icon}  {customLabel || `Add ${label}`}
        </Button>
      }
    </>
  );
};

export default AddButton;
