/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    taskList: [{scope: 'task', entity: 'task-list'}] as const,
    taskById: (id?: number | null) =>
    [{scope: 'task', entity: 'task-by-id', id}] as const,
};

export default queryKeys;