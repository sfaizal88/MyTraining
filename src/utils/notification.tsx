/**
 * 
 * Notification generator
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';

// UTILS IMPORT
import {formValidationMessages} from '@/utils/validationMessages';
import {NotificationType} from '@/utils/enum';

// CONTEXT IMPORT
import {NotificationContext} from '../contexts/notificationContext';

function useNotification() {
    const { notification, setNotification } = useContext(NotificationContext);

    const error = (message: unknown = formValidationMessages.error()) => {
        setNotification({type: NotificationType.error, message: message as string, isOpen: true});
    }

    const success = (message: unknown = formValidationMessages.success()) => {
        setNotification({type: NotificationType.success, message: message as string, isOpen: true});
    }
    return {
        error,
        success,
    }
}

export default useNotification;