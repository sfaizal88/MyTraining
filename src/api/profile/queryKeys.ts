/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    profileByUserId: (id?: number | null) =>
    [{scope: 'profile', entity: 'profile-by-user-id', id}] as const,
    techStackByStudentId: (student_id?: number | null) =>
    [{scope: 'profile', entity: 'tech-stack-by-student-id', student_id}] as const,
};

export default queryKeys;