/**
 * 
 * User API
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/student/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as studentListMockData} from '@/view/pages/student/mock/list';
import {mockData as studentDetailsMockData} from '@/view/pages/student/mock/details';

export type StudentGetItem = {
    id: number;
    name: string;
    role: string;
    contact_no: string;
    email: string;
}

// USE TO FETCH ALL STUDENTS
export function useStudentListQuery() {
    return useQuery(queryKeys.studentList, getStudentList, {
        placeholderData: [],
        select: (data) => studentListMockData,
    });
}

// USE TO FETCH ALL STUDENT AS OPTIONS
export function useStudentOptionsQuery() {
    return useQuery(queryKeys.studentList, getStudentList, {
        placeholderData: [],
        select: (data) => studentListMockData.map(item => ({label: item.name, value: item.id})),
    });
}

// FETCH ALL USERS API DETAILS
const getStudentList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});



export function useStudentByIdQuery(id?: number | null) {
    return useQuery(queryKeys.studentById(id), getStudentById, {
      enabled: Boolean(id),
      select: (data) => studentDetailsMockData,
    });
}
  
function getStudentById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.studentById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE SINGLE TRANSACTION
export function useCreateStudentMutation() {
    const queryClient = useQueryClient();
    return useMutation(createStudent, {
        onSuccess() {
        queryClient.invalidateQueries(queryKeys.studentList);
        },
    });
}

// CREATE SINGLE TRANSACTION API DETAILS
const createStudent = (data: StudentGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE SINGLE TRANSACTION
export function useUpdateStudentMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateStudent, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.studentList);
        },
    });
}

// UPDATE SINGLE TRANSACTION API DETAILS
const updateStudent = (data: StudentGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}