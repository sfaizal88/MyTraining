/**
 * 
 * Featuure flag
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// FEATURE FLAG TYPE
enum FeatureFlagType {
    roadMapMentor = 'ROAD_MAP_MENTOR',
    roadMapStudent = 'ROAD_MAP_STUDENT',
}

// GENERIC FEATURE FLAG
export const featureFlag: Record<FeatureFlagType, boolean> = {
    [FeatureFlagType.roadMapMentor]: false,
    [FeatureFlagType.roadMapStudent]: false,
}

