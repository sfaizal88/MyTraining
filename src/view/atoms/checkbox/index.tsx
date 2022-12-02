/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren, useState} from 'react';
import {Controller} from 'react-hook-form';
import {Box, Checkbox} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type CheckboxFieldProps = {
  id?: string;
  name: string;
  register: any;
  errors: any;
  control: any;
  setValue: any,
  defaultValue?: boolean;
  disabled?: boolean;
  changeEffect?: (value: boolean) => void;
  indeterminate?: boolean;
};

const CheckboxField = ({
  id,
  name,
  control,
  errors,
  setValue,
  defaultValue,
  children,
  disabled,
  changeEffect,
  indeterminate,
  register,
}: PropsWithChildren<CheckboxFieldProps>) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE STATE
    const [state, setState] = useState(defaultValue || false);

    return (
        <Controller
        control={control}
        name={name}
        defaultValue={state}
        render={() => (
            <Box display="flex" alignItems="center">
            <Checkbox
                {...register(name)}
                style={{padding: 0}}
                id={id || name}
                color="primary"
                checked={state}
                onChange={(e) => {
                    changeEffect?.(e.target.checked);
                    setValue(name, e.target.checked);
                    setState(e.target.checked)
                }}
                disabled={disabled}
                indeterminate={indeterminate}
            />
            <Box ml={1} className={classes.label}>{children}</Box>
            </Box>
        )}
        />
    );
}

export default CheckboxField;
