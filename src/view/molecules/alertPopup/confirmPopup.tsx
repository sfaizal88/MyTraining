/**
 * 
 * Conform popup component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {
    Box,
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Grid,
    Typography,
    IconButton,
} from '@mui/material';
import {Close} from '@mui/icons-material';

// GENERIC COMPONENT
import {Button} from '@/view/atoms';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type ConfirmPopupProps = {
    isOpen: boolean;
    title: string;
    maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
    onClose: () => void;
    onSubmit: () => void;
    submitLabel?: string;
    closeLabel?: string;
    content: string;
    details?: string;
    fullWidth?: boolean;
}

const ConfirmPopup = ({
    isOpen,
    title,
    content,
    details,
    maxWidth = 'xs',
    submitLabel = 'Yes',
    closeLabel = 'Cancel',
    onClose,
    onSubmit,
}: ConfirmPopupProps) => {
    const classes = useStyles();

    return (
        <Dialog 
            maxWidth={maxWidth} 
            open={isOpen} 
            fullWidth
        >
            <DialogTitle className={classes.titleContainer}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Box pl={1}>
                        <Typography variant="h6" className={classes.alertTitle}>{title}</Typography>
                    </Box>
                    {onClose && (
                        <IconButton onClick={onClose}>
                            <Close />
                        </IconButton>
                    )}
                </Grid>
            </DialogTitle>
            <DialogContent dividers className={classes.confirmContent}>
                <Box className={classes.bodyTitle}>{content}</Box>
                <Box className={classes.bodyDetails}>{details}</Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined"  onClick={() => onClose()} isSecondary>{closeLabel}</Button>
                <Button  variant="contained" onClick={() => onSubmit()}>{submitLabel}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmPopup;