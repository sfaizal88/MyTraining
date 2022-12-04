/**
 * 
 * Task API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/task/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';
import {TaskStatusType} from '@/utils/enum';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as taskListMockData} from '@/view/pages/task/mock/list';
import {mockData as taskDetailsMockData} from '@/view/pages/task/mock/details';

export type TaskGetItem = {
    id: number;
    title: string;
    type: string;
    details: string;
    status: TaskStatusType;
    images: string[];
    students: number[];
    duration: string;
}

// USE TO FETCH ALL TASK
export function useTaskListQuery() {
    return useQuery(queryKeys.taskList, getTaskList, {
        placeholderData: [],
        select: (data) => taskListMockData,
    });
}

// FETCH ALL TASK API DETAILS
const getTaskList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});

export function useTaskByIdQuery(id?: number | null) {
    return useQuery(queryKeys.taskById(id), getTaskById, {
      enabled: Boolean(id),
      select: (data) => taskDetailsMockData,
    });
}
  
function getTaskById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.taskById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE TASK
export function useCreateTaskMutation() {
    const queryClient = useQueryClient();
    return useMutation(createTask, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.taskList);
        },
    });
}

// CREATE TASK API DETAILS
const createTask = (data: TaskGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE TASK
export function useUpdateTaskMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateTask, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.taskList);
        },
    });
}

// UPDATE TASK API DETAILS
const updateTask = (data: TaskGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}