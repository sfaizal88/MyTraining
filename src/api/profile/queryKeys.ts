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
};

export default queryKeys;