/**
 * 
 * QueryKeys file
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */

// HOLD ALL QUERY KEYS
const queryKeys = {
    roadmapList: [{scope: 'roadmap', entity: 'roadmap-list'}] as const,
    roadmapById: (id?: number | null) =>
    [{scope: 'roadmap', entity: 'roadmap-by-id', id}] as const,
};

export default queryKeys;