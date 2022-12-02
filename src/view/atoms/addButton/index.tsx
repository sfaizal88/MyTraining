import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {AddCircleOutlineOutlined} from '@mui/icons-material';
import useStyles from './styles';

export type AddButtonProps = {
  label: string;
  icon?: ReactElement | null;
  onClick: () => void;
}

const AddButton = ({
  label,
  icon = <AddCircleOutlineOutlined style={{fontSize: 24, marginRight: '8px'}}/>,
  onClick,
}: AddButtonProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} onClick={onClick}>
      {icon}  {`Add ${label}`}
    </Box>
  );
};

export default AddButton;
