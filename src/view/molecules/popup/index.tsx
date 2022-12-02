/**
 * 
 * Popup dialog component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {
    Box,
    Dialog, 
    DialogTitle, 
    Grid, 
    Typography, 
    DialogContent, 
    DialogActions, 
    IconButton,
} from '@mui/material';
import {Close} from '@mui/icons-material';
import {ReactNode, PropsWithChildren} from 'react';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type PopupProps = {
    isOpen: boolean;
    title?: string;
    maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
    fullWidth?: boolean;
    onClose?: () => void;
    actions?: ReactNode;
    fullScreen?: boolean;
    leftSideButton?: ReactNode;
    externalClasses?: string
    customWidth?: number;
}

const Popup = ({
    isOpen,
    title = "",
    maxWidth = 'md',
    fullWidth,
    fullScreen = false,
    onClose,
    actions,
    leftSideButton,
    children,
    externalClasses = "",
    customWidth,
}: PropsWithChildren<PopupProps>) => {
    const classes = useStyles();
    return (
        <Dialog 
            maxWidth={maxWidth} 
            open={isOpen} 
            fullWidth={fullWidth}
            fullScreen={fullScreen}
            style={{padding: 0}}
        >
        {title && 
        <DialogTitle className={clsx(classes.popupHeader)}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Box pl={1}>
                    <Typography variant="h6">{title}</Typography>
                </Box>
                {onClose && (
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                )}
            </Grid>
        </DialogTitle>}
        <DialogContent className={clsx(classes.popupBody, externalClasses)}>
           {children}
        </DialogContent>
        {actions && (
            <DialogActions disableSpacing className={classes.actionRow}>
            <Box display={'flex'} flex={1} flexDirection={'row'}>
                <Box flex={1} mt={2}>{leftSideButton}</Box>
                <Box flex={1}>{actions}</Box>
            </Box>
            </DialogActions>
        )}
        </Dialog>
    )
}

export default Popup;