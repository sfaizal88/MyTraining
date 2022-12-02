/**
 * 
 * Notification model 
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// IMPORT UTILS
import {NotificationType} from '@/utils/enum';

// NOTIFICATION CONTEXT DATA TYPE
export type NotificationContextType = {
    type: NotificationType,
    message: string,
    isOpen: boolean,
}