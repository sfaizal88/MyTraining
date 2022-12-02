/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Controller, FieldErrors} from 'react-hook-form';
import { TextField as MuiTextField, Box } from '@mui/material';

// STYLE IMPORT
import useStyles from '../textField/styles';

type NumberFieldProps = {
    id: string;
    name: string;
    defaultValue?: string | number | null | boolean;
    control: any,
    register: any,
    hidden?: boolean;
}

// TEXTFIELD COMPONENT DECLARE
const NumberField = ({
    id,
    name,
    defaultValue,
    control,
    register,
    hidden,
}: NumberFieldProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    return (
        <Box display={hidden ? 'none' : 'block'}>
            <Controller
                control={control}
                name={name}
                render={() => (
                <MuiTextField 
                    {...register(name)}
                    variant="outlined" 
                    id={id || name}
                    classes={{root: classes.inputFieldContainer}}
                    defaultValue={defaultValue || null}
                />
                )}
            />  
        </Box>
    )
}

export default NumberField;