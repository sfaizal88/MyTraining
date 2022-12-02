/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    teacherList: [{scope: 'teacher', entity: 'teacher-list'}] as const,
    teacherById: (id?: number | null) =>
    [{scope: 'teacher', entity: 'teacher-by-id', id}] as const,
};

export default queryKeys;