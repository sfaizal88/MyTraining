/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    mockInterviewById: (id?: number | null) =>
    [{scope: 'mockInterview', entity: 'mockInterview-by-id', id}] as const,
};

export default queryKeys;