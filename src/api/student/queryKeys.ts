/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    studentList: [{scope: 'student', entity: 'student-list'}] as const,
    studentById: (id?: number | null) =>
    [{scope: 'student', entity: 'student-by-id', id}] as const,
};

export default queryKeys;