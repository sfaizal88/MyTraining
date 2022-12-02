/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    techStackList: [{scope: 'techStack', entity: 'techStack-list'}] as const,
    techStackById: (id?: number | null) =>
    [{scope: 'techStack', entity: 'techStack-by-id', id}] as const,
};

export default queryKeys;