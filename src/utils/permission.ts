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

// ALLOWED PERMISSION KEY
export type Permission =
| 'admin.mentor'
| 'admin.student'
| 'mentor.roadmap'
| 'mentor.task'
| 'mentor.techStack'
| 'mentor.report'
| 'student.myProfile'
| 'general.dashboard'
| 'general.setting'