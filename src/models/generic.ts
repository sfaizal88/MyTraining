/**
 * 
 * Generic model
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API
import {MentorGetItem} from '@/api/mentor/mentor';

// OPTION DATA TYPE
export type OptionType = {
    label: string;
    value: number;
} 

// DEFAULT VALUE OF MENTOR
export const MentorInitialValues: MentorGetItem = {
    id: 0,
    name: '',
    contact_no: '',
    dob: '',
    email: '',
    students: [],
}