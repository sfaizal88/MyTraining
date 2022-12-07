/**
 * 
 * Profile details hooks
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// PROPS TYPE
type profileDetailsProps = {
    role?: UserRoleType
}

export function useProfileDetails({
    role = UserRoleType.student
}: profileDetailsProps) {
    console.log("role: ", role);
    const isLoginUserStudent = () => Number(role) === UserRoleType.student;
    const isLoginUserAdmin = () => Number(role) === UserRoleType.admin;
    const isLoginUserMentor = () => Number(role) === UserRoleType.mentor;
    console.log("isLoginUserStudent: ", isLoginUserStudent());
    console.log("isLoginUserAdmin: ", isLoginUserAdmin());
    console.log("isLoginUserMentor: ", isLoginUserMentor());

    return {
        isLoginUserStudent,
        isLoginUserAdmin,
        isLoginUserMentor,
    };
}
