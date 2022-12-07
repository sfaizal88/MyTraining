/**
 * 
 * Permission formatter
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// CHECK WHETHER PERMISSION ALLOWED BY PERMISSION KEY
export const useHasPermission = (key: Permission) => {
    const userObject = useContext(UserContext);
    const allowedPermissionKeys = userObject.permission_ids;
    return allowedPermissionKeys.includes(key);
}

// CHECK WHETHER PERMISSION ALLOWED BY PERMISSION KEY
export const useHasAnyPermission = (keys: Permission[]) => {
    const userObject = useContext(UserContext);
    const allowedPermissionKeys = userObject.permission_ids;
    const isAllowed = allowedPermissionKeys.some(value => keys.includes(value));
    return isAllowed;
}

// ALLOWED PERMISSION KEY
export type Permission =
| 'general.dashboard'
| 'admin.mentor'
| 'admin.student'
| 'mentor.techStack'
| 'mentor.roadmap'
| 'mentor.report'
| 'mentor.task'
| 'student.techStack'
| 'student.task'
| 'student.roadmap'
| 'student.mockInterview'
| 'general.settings'

