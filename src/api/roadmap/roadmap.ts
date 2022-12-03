/**
 * 
 * Roadmap API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/roadmap/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as roadmapListMockData} from '@/view/pages/roadmap/mock/list';
import {mockData as roadmapDetailsMockData} from '@/view/pages/roadmap/mock/details';

export type MileStoneGetItem = {
    title: string;
    description: string;
    date: string;
    completed: boolean;
}

export type RoadmapGetItem = {
    id: number;
    name: string;
    mile_stone: MileStoneGetItem[];
    students: number[];
}

// USE TO FETCH ALL TEACHER
export function useRoadmapListQuery() {
    return useQuery(queryKeys.roadmapList, getRoadmapList, {
        placeholderData: [],
        select: (data) => roadmapListMockData,
    });
}

// FETCH ALL TEACHER API DETAILS
const getRoadmapList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});



export function useRoadmapByIdQuery(id?: number | null) {
    return useQuery(queryKeys.roadmapById(id), getRoadmapById, {
      enabled: Boolean(id),
      select: (data) => roadmapDetailsMockData,
    });
}
  
function getRoadmapById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.roadmapById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE TEACHER
export function useCreateRoadmapMutation() {
    const queryClient = useQueryClient();
    return useMutation(createRoadmap, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.roadmapList);
        },
    });
}

// CREATE TEACHER API DETAILS
const createRoadmap = (data: RoadmapGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE TEACHER
export function useUpdateRoadmapMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateRoadmap, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.roadmapList);
        },
    });
}

// UPDATE TEACHER API DETAILS
const updateRoadmap = (data: RoadmapGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}