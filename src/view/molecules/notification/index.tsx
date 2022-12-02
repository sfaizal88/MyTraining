/**
 * 
 * Notification component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useEffect, Dispatch, SetStateAction} from 'react';
import {Box, Alert} from '@mui/material';

// UTILS IMPORT 
import {NotificationType} from '@/utils/enum';

// STYLE IMPORT
import useStyles from './styles';

// MODEL IMPORT
import {NotificationContextType} from '@/models/notification';

// COMPONENT PROPS
export type NotificationProps = NotificationContextType & {
    setNotification: Dispatch<SetStateAction<NotificationContextType>>
}

const Notification = ({
    message,
    type,
    isOpen,
    setNotification,
}: NotificationProps) => {
    const classes = useStyles();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setNotification({message: '', isOpen: false, type}), 7000);
        }
    }, [isOpen])
    
    return (
        <Box className={clsx(classes.notificationContainer, isOpen && classes.showNotification)}>
            <Alert severity={NotificationType.error === type ? "error": 'success'}>{message}</Alert>
        </Box>  
    )
}

export default Notification;