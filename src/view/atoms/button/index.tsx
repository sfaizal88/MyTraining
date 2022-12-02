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
        classes={{
          root: clsx(isSecondary ? classes.secondaryButton : classes.primaryButton),
          text: classes.buttonLabel
        }}
      >
        {children}
      </MuiButton>
    );
  };
  
export default Button;