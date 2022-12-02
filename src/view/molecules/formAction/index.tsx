/**
 * 
 * Form action component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Box, ButtonProps, Grid} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

// GENERIC COMPONENT
import {Button} from '@/view/atoms';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type FormActionProps = {
    showSubmit: boolean;
    submitLabel?: string;
    onCancel?: () => void;
    onSubmit?: () => void;
    cancelLabel?: string;
    submitBtnType?: "button" | "submit" | "reset";
    submitIcon?: ReactElement;
    cancelIcon?: ReactElement;
    externalClasses?: string,
    disableSubmit?: boolean;
    additionalActions?: {
        onClick: () => void;
        label: string;
        variant?: ButtonProps['variant'];
        color?: ButtonProps['color'];
        type?: 'button' | 'submit';
        isInvalid?: boolean;
    }[];
    leftHandChild?: ReactNode;
    rightHandChild?: ReactNode;
    isFullWidth?: boolean;
}

const FormAction = ({
    showSubmit,
    submitLabel = "submit",
    onCancel,
    onSubmit,
    cancelLabel = "cancel",
    submitBtnType = 'submit',
    submitIcon,
    cancelIcon,
    disableSubmit = false,
    additionalActions,
    leftHandChild,
    rightHandChild,
    isFullWidth = false,
}: FormActionProps) => {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
            className={classes.formActionContainer}
            >       
                {leftHandChild && (
                    <Grid item className={classes.formActionEmpty}>
                    {leftHandChild}
                    </Grid>
                )}
                {onCancel && (
                <Grid item>
                    <Box flex={1} className={classes.secondBtn}>
                        <Button variant="outlined" onClick={() => onCancel?.()} isSecondary>{cancelIcon} {cancelLabel}</Button>
                    </Box>
                </Grid>
                )}
                {additionalActions?.map(
                    ({
                    onClick,
                    label,
                    variant = 'outlined',
                    color = 'primary',
                    type = 'button',
                    isInvalid = false,
                    }) => (
                    <Grid item key={label}>
                        <Button 
                            onClick={onClick}
                            variant={variant} 
                            type={type} 
                            color={color}
                            disabled={disableSubmit}
                        >{label}</Button>
                    </Grid>
                    ),
                )}
                {rightHandChild && (
                    <Grid item>
                        {rightHandChild}
                    </Grid>
                )}
                {showSubmit && (
                <Grid item className={clsx(isFullWidth && classes.fullWidth)}>
                    <Button 
                        className={clsx(isFullWidth && classes.fullWidth)}
                        variant="contained" 
                        type={submitBtnType} 
                        {...(onSubmit && { onClick: onSubmit })}
                        disabled={disableSubmit}
                    >{submitIcon} {submitLabel}</Button>
                </Grid>
                )}
        </Grid>
    )
        
}

export default FormAction;