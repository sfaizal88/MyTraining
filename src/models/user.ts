/**
 * 
 * User model
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// LOGIN DATA TYPE
export type LoginType = {
    username: string;
    password: string;
}

// USER DATA TYPE
export type UserType = {
    id: number;
    name: string;
    role: UserRoleType;
    email: string;
    contact_no: string;
}