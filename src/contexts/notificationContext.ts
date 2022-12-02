/**
 * 
 * Notification context
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {createContext, Dispatch, SetStateAction} from 'react';

// MODEL IMPORT
import {NotificationContextType} from '@/models/notification';

// UTILS IMPORT
import {NotificationType} from '@/utils/enum';

// CREATING CONTEXT WITH INITIAL VALUES
export const NotificationContext = createContext<{ 
    notification: NotificationContextType; 
    setNotification: Dispatch<SetStateAction<NotificationContextType>>
  }>({
    notification: {
      type: NotificationType.success,
      message: '',
      isOpen: false,
    },
    setNotification: () => {}
});