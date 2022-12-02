/**
 * 
 * Teacher API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/teacher/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as teacherListMockData} from '@/view/pages/teacher/mock/list';
import {mockData as teacherDetailsMockData} from '@/view/pages/teacher/mock/details';

export type TeacherGetItem = {
    id: number;
    name: string;
    contact_no: string;
    email: string;
    students: number[];
}

// USE TO FETCH ALL TEACHER
export function useTeacherListQuery() {
    return useQuery(queryKeys.teacherList, getTeacherList, {
        placeholderData: [],
        select: (data) => teacherListMockData,
    });
}

// FETCH ALL TEACHER API DETAILS
const getTeacherList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});



export function useTeacherByIdQuery(id?: number | null) {
    return useQuery(queryKeys.teacherById(id), getTeacherById, {
      enabled: Boolean(id),
      select: (data) => teacherDetailsMockData,
    });
}
  
function getTeacherById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.teacherById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE TEACHER
export function useCreateTeacherMutation() {
    const queryClient = useQueryClient();
    return useMutation(createTeacher, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.teacherList);
        },
    });
}

// CREATE TEACHER API DETAILS
const createTeacher = (data: TeacherGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE TEACHER
export function useUpdateTeacherMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateTeacher, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.teacherList);
        },
    });
}

// UPDATE TEACHER API DETAILS
const updateTeacher = (data: TeacherGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}