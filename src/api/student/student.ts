/**
 * 
 * Student API
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/student/queryKeys';

// UTILS IMPORT
import {api_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// UTILS IMPORT
import {getStorage} from '@/utils/helper';
import {UserRoleType} from '@/utils/enum';

// GET TYPE
export type StudentGetItem = {
    id: number;
    name: string;
    contact_no: string;
    email: string;
    dob: string;
    role: UserRoleType;
    permission_ids?: string[];
    linked_link?: string;
    github_link?: string;
}

// USE TO FETCH ALL STUDENTS
export function useStudentListQuery() {
    return useQuery(queryKeys.studentList, getStudentList);
}

// USE TO FETCH ALL STUDENT AS OPTIONS
export function useStudentOptionsQuery() {
    return useQuery(queryKeys.studentList, getStudentList, {
        select: (data) => data.map((item: StudentGetItem) => ({label: item.name, value: item.id})),
    });
}

// FETCH ALL USERS API DETAILS
const getStudentList = () => 
    CallDataApi({url: `${api_url}student/getAllStudent.php`});

// USE TO FETCH ALL STUDENTS ASSIGNED TO SPECIFIC MENTOR
export function useAllStudentAssignedToMentorQuery() {
    return useQuery(queryKeys.studentList, getAllStudentAssignedToMentor);
}

// FETCH ALL STUDENTS ASSIGNED TO SPECIFIC MENTOR API DETAILS
const getAllStudentAssignedToMentor = () => 
    CallDataApi({url: `${api_url}student/getAllStudentAssignedToMentor.php`});

export function useStudentByIdQuery(id?: number | null) {
    return useQuery(queryKeys.studentById(id), getStudentById, {
      enabled: Boolean(id),
    });
}
  
function getStudentById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.studentById>>) {
    return CallDataApi({url: `${api_url}student/getStudentById.php?student_id=${id}&token=${getStorage('token')}`});
}

export function useStudentByIdsQuery(ids: number[]) {
    return useQuery(queryKeys.studentByIds(ids), getStudentByIds);
}
  
function getStudentByIds({
    queryKey: [{ids}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.studentByIds>>) {
    return CallDataApi({url: `${api_url}student/getStudentByIds.php?student_ids=${ids}&token=${getStorage('token')}`});
}

// USE TO CREATE STUDENT
export function useCreateStudentMutation() {
    const queryClient = useQueryClient();
    return useMutation(createStudent, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.studentList);
        },
    });
}

// CREATE STUDENT API DETAILS
const createStudent = (data: StudentGetItem) => {
    return CallDataApi({
        url: `${api_url}student/addStudent.php`,
        method: 'POST',
        data: JSON.stringify({...data, token: getStorage('token')})
    });
}

// USE TO UPDATE STUDENT
export function useUpdateStudentMutation(id?: number | null) {
    const queryClient = useQueryClient();
    return useMutation(updateStudent, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.studentList);
            if (id) {
                queryClient.invalidateQueries(queryKeys.studentById(id)); 
            }
        },
    });
}

// UPDATE UPDATE STUDENT API DETAILS
const updateStudent = (data: StudentGetItem) => {
    return CallDataApi({
        url: `${api_url}student/updateStudent.php`,
        method: 'POST',
        data: JSON.stringify({...data, token: getStorage('token')})
    });
}

// USE TO DELETE STUDENT
export function useDeleteStudentMutation() {
    const queryClient = useQueryClient();
    return useMutation(deleteStudent, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.studentList);
        },
    });
}

// DELETE STUDENT API DETAILS
const deleteStudent = (student_id: number | null) => {
    return CallDataApi({
        url: `${api_url}student/deleteStudent.php`,
        method: 'POST',
        data: JSON.stringify({student_id, token: getStorage('token')})
    });
}