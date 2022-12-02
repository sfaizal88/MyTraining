/**
 * 
 * Date field component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import moment from 'moment';
import {useState} from 'react';
import {Controller} from 'react-hook-form';
import {KeyboardDatePicker} from '@material-ui/pickers';
import {serverDateTimeFormat} from '@/utils/constants';

// STYLE IMPORT
import useStyles from './styles';

type DateFieldProps = {
    register: any,
    control: any,
    errors: any,
    id?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | null | boolean;
    isDisabled?: boolean;
    disableFuture?: boolean;
    disablePast?: boolean;
}

// DATE FIELD COMPONENT DECLARE
const DateField = ({
    id,
    name,
    placeholder,
    defaultValue,
    control,
    errors,
    register,
    isDisabled,
    disableFuture = true,
    disablePast=true,
}: DateFieldProps) => {
    // STYLE DECLARE
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(defaultValue || '');

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
                    value={selectedDate}
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
