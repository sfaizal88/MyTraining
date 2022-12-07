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
import {web_url, api_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// UTILS IMPORT
import {getStorage} from '@/utils/helper';

export type TechDetailsGetItem = {
    id: number;
    title: string;
    tutorial_url: string;
    video_url: string;
    isSelected?: boolean;
}

export type TechStackGetItem = {
    id: number;
    title: string;
    tutorial_url: string;
    video_url: string;
    tech_details: TechDetailsGetItem[];
    students: number[];
    total_topics?: number;
    can_delete?: boolean;
}

export type TechStackGet = {
    tech_stack: TechStackGetItem[]
}

export type TechStackAssignPostItem = {
    student_id: number;
    tech_stack_id: number;
}

// USE TO FETCH ALL TECH STACK
export function useTechStackListQuery() {
    return useQuery(queryKeys.techStackList, getTechStackList);
}

// USE TO FETCH ALL TECH STACK OPTIONS
export function useTechStackOptionsQuery() {
    return useQuery(queryKeys.techStackList, getTechStackList, {
        placeholderData: [],
        select: (data) => data.map((item: TechStackGetItem) => ({value: item.id, label: item.title})),
    });
}

// FETCH ALL TECH STACK API DETAILS
const getTechStackList = () => 
    CallDataApi({url: `${api_url}techStack/getAllTechStack.php`});



export function useTechStackByIdQuery(id?: number | null) {
    return useQuery(queryKeys.techStackById(id), getTechStackById, {
      enabled: Boolean(id),
    });
}
  
function getTechStackById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.techStackById>>) {
    return CallDataApi({url: `${api_url}techStack/getTechStackById.php?tech_stack_id=${id}&token=${getStorage('token')}`});
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
        url: `${api_url}techStack/addTechStack.php`,
        method: 'POST',
        data: JSON.stringify({...data, token: getStorage('token')})
    });
}

// USE TO UPDATE TECH STACK
export function useUpdateTechStackMutation(id?: number | null) {
    const queryClient = useQueryClient();
    return useMutation(updateTechStack, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.techStackList);
            if (id) {
                queryClient.invalidateQueries(queryKeys.techStackById(id)); 
            }
        },
    });
}

// UPDATE TECH STACK API DETAILS
const updateTechStack = (data: TechStackGetItem) => {
    return CallDataApi({
        url: `${api_url}techStack/updateTechStack.php`,
        method: 'POST',
        data: JSON.stringify({...data, token: getStorage('token')})
    });
}

// USE TO ASSIGN TECH STACK TO USER
export function useAssignTechStackToUserMutation(userId: number) {
    const queryClient = useQueryClient();
    return useMutation(assignTechStackToUser, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.techStackById(userId));
        },
    });
}

// ASSIGN TECH STACK TO USER API DETAILS
const assignTechStackToUser = (data: TechStackAssignPostItem) => {
    return CallDataApi({
        url: `${api_url}techStack/assignTechStackToStudent.php`,
        method: 'POST',
        data: JSON.stringify({...data , token: getStorage('token')})
    });
}

// USE TO DELETE TECH STACK
export function useDeleteTechStackMutation() {
    const queryClient = useQueryClient();
    return useMutation(deleteTechStack, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.techStackList);
        },
    });
}

// DELETE TECH STACK API 
const deleteTechStack = (tech_stack_id: number | null) => {
    return CallDataApi({
        url: `${api_url}techStack/deleteTechStack.php`,
        method: 'POST',
        data: JSON.stringify({tech_stack_id, token: getStorage('token')})
    });
}