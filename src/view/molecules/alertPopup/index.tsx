/**
 * 
 * Alert popup component
 * @author - NA 
 * @date - 3th September, 2022
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
type AlertPopupProps = {
    isOpen: boolean;
    title: string;
    maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
    onClose: () => void;
    onSubmit: () => void;
    submitLabel?: string;
    closeLabel?: string;
    content: string;
    fullWidth?: boolean;
}

const AlertPopup = ({
    isOpen,
    title,
    content,
    maxWidth = 'xs',
    submitLabel = 'Yes',
    closeLabel = 'Cancel',
    onClose,
    onSubmit,
}: AlertPopupProps) => {
    const classes = useStyles();

    const onAgree = () => {
        onSubmit();
        onClose();
    }

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
            <DialogContent dividers className={classes.alertContent}>
                <Box py={4}>{content}</Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => onClose()} isSecondary>{closeLabel}</Button>
                <Button  variant="contained" onClick={onAgree}>{submitLabel}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlertPopup;