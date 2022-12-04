/**
 * 
 * Select field component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Controller} from 'react-hook-form';
import { Select, MenuItem, FormHelperText, FormControl } from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type OptionType = {
    label: string;
    value: number;
}

type SelectFieldProps = {
    register: any,
    control: any,
    errors: any,
    id?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | null | boolean;
    emptyOptionLabel?: string;
    options: OptionType[];
}

// SELECT FIELD COMPONENT DECLARE
const SelectField = ({
    id,
    name,
    placeholder,
    defaultValue,
    control,
    errors,
    register,
    emptyOptionLabel,
    options,
}: SelectFieldProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    return (
        <Controller
            control={control}
            name={name}
            render={() => (
                <FormControl error={Boolean(errors)} sx={{ width: '100%' }}>
                    <Select
                    {...register(name)}
                        id={id || name}
                        variant="outlined"
                        placeholder={placeholder}
                        className={classes.inputFieldContainer}
                        size="small"
                        helperText={errors?.message || null}
                        error={Boolean(errors)}
                        defaultValue={defaultValue || null}
                        fullWidth
                        InputProps={{
                            autoComplete: 'off',
                            role: 'presentation',
                            classes: {
                            root: classes.root,
                            notchedOutline:  classes.notchedOutline
                            }
                        }}
                        displayEmpty
                    >
                        <MenuItem value="">{emptyOptionLabel}</MenuItem>
                        {options.map((option: OptionType) => (
                            <MenuItem value={option.value} className={classes.selectFieldOption} key={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                <FormHelperText>{errors?.message}</FormHelperText>
                </FormControl>
            )}
        /> 
    )
}

export default SelectField;