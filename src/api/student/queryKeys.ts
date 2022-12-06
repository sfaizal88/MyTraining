/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    studentList: [{scope: 'student', entity: 'student-list'}] as const,
    studentById: (id?: number | null) =>
    [{scope: 'student', entity: 'student-by-id', id}] as const,
    studentByIds: (ids: number[]) =>
    [{scope: 'student', entity: 'student-by-ids', ids}] as const,
};

export default queryKeys;