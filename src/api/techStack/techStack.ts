/**
 * 
 * Tech Stack API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/techStack/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as techStackListMockData} from '@/view/pages/techStack/mock/list';
import {mockData as techStackDetailsMockData} from '@/view/pages/techStack/mock/details';

export type TechDetailsGetItem = {
    id: number;
    title: string;
    tutorial_url: string;
    video_url: string;
}

export type TechStackGetItem = {
    id: number;
    title: string;
    tutorial_url: string;
    video_url: string;
    tech_details: TechDetailsGetItem[];
    students: number[];
}

// USE TO FETCH ALL TECH STACK
export function useTechStackListQuery() {
    return useQuery(queryKeys.techStackList, getTechStackList, {
        placeholderData: [],
        select: (data) => techStackListMockData,
    });
}

// FETCH ALL TECH STACK API DETAILS
const getTechStackList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});



export function useTechStackByIdQuery(id?: number | null) {
    return useQuery(queryKeys.techStackById(id), getTechStackById, {
      enabled: Boolean(id),
      select: (data) => techStackDetailsMockData,
    });
}
  
function getTechStackById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.techStackById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE TECH STACK
export function useCreateTechStackMutation() {
    const queryClient = useQueryClient();
    return useMutation(createTechStack, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.techStackList);
        },
    });
}

// CREATE TECH STACK API DETAILS
const createTechStack = (data: TechStackGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE TECH STACK
export function useUpdateTechStackMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateTechStack, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.techStackList);
        },
    });
}

// UPDATE TECH STACK API DETAILS
const updateTechStack = (data: TechStackGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}