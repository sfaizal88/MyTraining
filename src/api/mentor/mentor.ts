/**
 * 
 * Mentor API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/mentor/queryKeys';

// UTILS IMPORT
import {api_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// UTILS IMPORT
import {getStorage} from '@/utils/helper';

export type MentorGetItem = {
    id: number;
    name: string;
    contact_no: string;
    email: string;
    students: number[];
    dob: string;
}

// USE TO FETCH ALL MENTOR
export function useMentorListQuery() {
    return useQuery(queryKeys.mentorList, getMentorList);
}

// FETCH ALL MENTOR API DETAILS
const getMentorList = () => 
    CallDataApi({url: `${api_url}mentor/getAllMentor.php`});

export function useMentorByIdQuery(id?: number | null) {
    return useQuery(queryKeys.mentorById(id), getMentorById, {
      enabled: Boolean(id),
    });
}
  
function getMentorById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.mentorById>>) {
    return CallDataApi({url: `${api_url}mentor/getMentorById.php?mentor_id=${id}&token=${getStorage('token')}`});
}

// USE TO CREATE MENTOR
export function useCreateMentorMutation() {
    const queryClient = useQueryClient();
    return useMutation(createMentor, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.mentorList);
        },
    });
}

// CREATE MENTOR API DETAILS
const createMentor = (data: MentorGetItem) => {
    return CallDataApi({
        url: `${api_url}mentor/addMentor.php`,
        method: 'POST',
        data: JSON.stringify({...data, token: getStorage('token')})
    });
}

// USE TO UPDATE MENTOR
export function useUpdateMentorMutation(id?: number | null) {
    const queryClient = useQueryClient();
    return useMutation(updateMentor, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.mentorList);
            if (id) {
                queryClient.invalidateQueries(queryKeys.mentorById(id)); 
            }
        },
    });
}

// UPDATE MENTOR API DETAILS
const updateMentor = (data: MentorGetItem) => {
    return CallDataApi({
        url: `${api_url}mentor/updateMentor.php`,
        method: 'POST',
        data: JSON.stringify({...data , token: getStorage('token')})
    });
}

// USE TO DELETE MENTOR
export function useDeleteMentorMutation() {
    const queryClient = useQueryClient();
    return useMutation(deleteMentor, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.mentorList);
        },
    });
}

// DELETE MENTOR API MENTOR
const deleteMentor = (mentor_id: number | null) => {
    return CallDataApi({
        url: `${api_url}mentor/deleteMentor.php`,
        method: 'POST',
        data: JSON.stringify({mentor_id, token: getStorage('token')})
    });
}