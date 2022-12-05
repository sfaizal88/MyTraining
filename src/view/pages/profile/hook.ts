/**
 * 
 * Profile details hooks
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

export function useProfileDetails() {
    // CONTEXT DECALRE
    const userContext = useContext(UserContext);

    const isLoginUserStudent = () => userContext.role !== UserRoleType.student;
    const isLoginUserAdmin = () => userContext.role === UserRoleType.admin;

    return {
        isLoginUserStudent,
        isLoginUserAdmin,
    };
}
