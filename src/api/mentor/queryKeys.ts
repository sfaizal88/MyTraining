/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    mentorList: [{scope: 'mentor', entity: 'mentor-list'}] as const,
    mentorById: (id?: number | null) =>
    [{scope: 'mentor', entity: 'mentor-by-id', id}] as const,
};

export default queryKeys;