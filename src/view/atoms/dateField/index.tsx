/**
 * 
 * Date field component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import moment from 'moment';
import {Box, TextField} from '@mui/material';
import {useState, useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {KeyboardDatePicker} from '@material-ui/pickers';
import {formatDateDisplay} from '@/utils/helper';

// STYLE IMPORT
import useStyles from './styles';

type DateFieldProps = {
    register: any,
    control: any,
    errors: any,
    setValue?: any,
    id?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string;
    isDisabled?: boolean;
    disableFuture?: boolean;
    disablePast?: boolean;
}

// DATE FIELD COMPONENT DECLARE
const DateField = ({
    id,
    name,
    placeholder,
    defaultValue = "",
    setValue,
    control,
    errors,
    register,
    isDisabled,
    disableFuture = true,
    disablePast=true,
}: DateFieldProps) => {
    // STYLE DECLARE
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(defaultValue);
    useEffect(() => {
        setValue(name, selectedDate)
    }, [selectedDate]);

    return (
        <Controller
            control={control}
            name={name}
            render={(props) => (
                <KeyboardDatePicker
                    {...register(name)}
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    format="DD MMMM, yyyy"
                    emptyLabel={placeholder}
                    orientation="landscape"
                    InputAdornmentProps={{ position: "end" }}
                    classes={{root: classes.inputFieldContainer}}
                    error={Boolean(errors)}
                    placeholder={placeholder}
                    value={new Date(defaultValue)}
                    disableFuture={disableFuture}
                    disablePast={disablePast}
                    onChange={handleDateChange}
                    {...props}
                    disabled={isDisabled}
                    helperText={errors?.message || null}
                    InputProps={{
                        classes: {
                           root: classes.root,
                           notchedOutline:  classes.notchedOutline
                        }
                    }}
                />
            )}
        /> 
    )
}

export default DateField;
