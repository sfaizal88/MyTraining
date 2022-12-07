/**
 * 
 * User context - login user
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {createContext} from 'react';

// MODEL IMPORT
import {UserType} from '@/models/user';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// CREATING CONTEXT WITH INITIAL VALUES
export const UserContext = createContext<UserType>({
    id: 0,
    name: "",
    role: UserRoleType.admin,
    permission_ids: [],
    email: "",
    contact_no: "",
});