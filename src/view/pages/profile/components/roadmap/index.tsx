/**
 * 
 * Roadmap page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';

// API IMPORT
import {useRoadmapByUserIdQuery} from '@/api/roadmap/roadmap';

// GENERIC VIEW IMPORT 
import {Timeline} from '@/view/molecules';

type RoadmapProps = {
    userId: number;
}
// ROADMAP SCREEN COMPONENT DECLARE
const Roadmap = ({
    userId
}: RoadmapProps) => {
    const roadmapByUserIdQuery = useRoadmapByUserIdQuery(userId);

    if (!roadmapByUserIdQuery.data) return null;

    return (
        <Timeline mileStone={roadmapByUserIdQuery?.data?.mile_stone || []}/>
    )
}

export default Roadmap;