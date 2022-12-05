/**
 * 
 * Form row component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {PropsWithChildren} from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type FormRowProps = {
    label: string;
    labelWidth?: number;
    required?: boolean;
    externalClasses?: string,
    isViewOnly?: boolean,
    isRow?: boolean;
    spacing?: number;
}

const FormRow = ({
    label,
    children,
    required,
    externalClasses,
    isViewOnly,
    isRow = false,
    spacing = 0,
}: PropsWithChildren<FormRowProps>) => {
    const classes = useStyles();
    return (
        <Box mb={spacing} className={clsx(classes.fieldSet, isViewOnly && classes.viewFormRow, externalClasses, isRow && classes.rowFieldSet)}>
            <Box className={clsx(classes.fieldLabel, isViewOnly && classes.viewFieldLabel, isRow && classes.rowFieldLabel)}>
                {label} {required && <span className={classes.required}>&nbsp;*</span>}
            </Box>
            <Box className={clsx(classes.field, isViewOnly && classes.viewData)}>
                {children}
            </Box>
        </Box>
    )
}

export default FormRow;