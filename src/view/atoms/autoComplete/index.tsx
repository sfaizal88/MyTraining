/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Controller, FieldErrors} from 'react-hook-form';
import { TextField, Autocomplete as MuiAutocomplete, Checkbox as MuiCheckbox } from '@mui/material';
import {CheckBoxOutlineBlank, CheckBox} from '@mui/icons-material';


// STYLE IMPORT
import useStyles from './styles';

type OptionType = {
    label: string;
    value: number;
}

type AutoCompleteProps = {
    register: any,
    control: any,
    setValue: any,
    errors: any,
    id: string;
    name: string;
    placeholder?: string;
    defaultValue?: number[];
    options: OptionType[]
    multiple?: boolean;
}

// AUTO COMPLETE COMPONENT DECLARE
const AutoComplete = ({
    id,
    name,
    placeholder,
    defaultValue,
    control,
    setValue,
    errors,
    register,
    options,
    multiple = true,
}: AutoCompleteProps) => {
    // STYLE DECLARE
    const classes = useStyles(); 
    return (
        <Controller
            control={control}
            name={name}
            render={() => (
                <MuiAutocomplete
                    {...register(name)}
                    multiple={multiple}
                    options={options}
                    disableCloseOnSelect
                    defaultValue={options.filter(item => defaultValue?.includes(item.value))}
                    classes={{
                        root: classes.autoCompleteRoot,
                        inputRoot: classes.autoCompleteInputContainer,
                        option: classes.optionItem,
                    }}
                    onChange={(
                        _: unknown,
                        newValue: OptionType[],
                        ) => {
                            setValue(name, newValue.map((v) => v.value))
                        }}
                    getOptionLabel={(option: OptionType) => option.label}
                    renderOption={(props, option: OptionType, { selected }) => (
                        <li {...props}>
                        <MuiCheckbox
                            icon={<CheckBoxOutlineBlank fontSize="small" />}
                            checkedIcon={<CheckBox fontSize="small" />}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.label}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            fullWidth
                            placeholder={placeholder} 
                            error={Boolean(errors)}
                            variant="outlined" 
                            helperText={errors?.message || null}
                            classes={{
                                root: classes.inputField
                            }}
                        />
                    )}
                />
            )}
        /> 
    )
}

export default AutoComplete;