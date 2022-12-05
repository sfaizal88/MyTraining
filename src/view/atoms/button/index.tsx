/**
 * 
 * Button component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {
    Button as MuiButton,
    ButtonProps,
    ButtonTypeMap,
} from '@mui/material';
import {ElementType} from 'react';

// STYLE IMPORT
import useStyles from './styles';
  
  const Button = <
    D extends ElementType = ButtonTypeMap['defaultComponent'],
    P = {},
  >({
    isSecondary,
    children,
    ...props
  }: ButtonProps<D, P> & {
    isSecondary?: boolean
  }) => {
    const classes = useStyles();
    return (
      <MuiButton
        {...props}
        className={clsx(isSecondary ? classes.secondaryButton : classes.primaryButton)}
        sx={{
          ':hover': {
            bgcolor: isSecondary ? 'background.paper' : '#025b8b',
            color: 'background.paper',
          },
        }}
      >
        {children}
      </MuiButton>
    );
  };
  
export default Button;