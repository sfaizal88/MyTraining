/**
 * 
 * Helper
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import moment from 'moment';

// UTILS IMPORT
import {displayDateFormat, serverDisplayDateFormat} from '@/utils/constants';

// SET BROWSER STORAGE
export const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

// GET BROWSER STORAGE
export const getStorage = (key: string) => {
    return localStorage.getItem(key);
}

// CLEAR BROWSER STORAGE
export const clearStorage = () => {
    localStorage.clear();
}

// USED TO DISPLAY DATE IN SPECIFIC FORMAT WITHOUT UTC CONVERSION
export const formatDateDisplay = (
    unformattedDate: string, 
    format: string = displayDateFormat
    ) => {
    return unformattedDate ? moment(unformattedDate, serverDisplayDateFormat).format(format) : '';
}