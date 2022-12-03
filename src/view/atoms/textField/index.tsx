/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Controller, FieldErrors} from 'react-hook-form';
import { TextField as MuiTextField } from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type TextFieldProps = {
    register: any,
    control: any,
    errors: any,
    id?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | null | boolean;
    multiline?: boolean;
    rows?: number;
    type?: 'text' | 'file' | 'number'
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder,
    defaultValue,
    control,
    errors,
    register,
    type = 'text',
    multiline = false,
    rows = 1,
}: TextFieldProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    return (
        <Controller
            control={control}
            name={name}
            render={() => (
                <MuiTextField 
                    {...register(name)}
                    error={Boolean(errors)}
                    variant="outlined" 
                    id={id || name}
                    type={type}
                    classes={{root: classes.inputFieldContainer}}
                    defaultValue={defaultValue || null}
                    placeholder={placeholder}
                    fullWidth
                    multiline={multiline}
                    helperText={errors?.message || null}
                    rows={rows}
                    InputProps={{
                        autoComplete: 'off',
                        role: 'presentation',
                        classes: {
                           root: multiline ? classes.multilineRow : classes.root,
                           notchedOutline:  classes.notchedOutline
                        }
                    }}
                />
            )}
        /> 
    )
}

export default TextField;