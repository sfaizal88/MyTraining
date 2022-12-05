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
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as mentorListMockData} from '@/view/pages/mentor/mock/list';
import {mockData as mentorDetailsMockData} from '@/view/pages/mentor/mock/details';

export type MentorGetItem = {
    id: number;
    name: string;
    contact_no: string;
    email: string;
    students: number[];
}

// USE TO FETCH ALL MENTOR
export function useMentorListQuery() {
    return useQuery(queryKeys.mentorList, getMentorList, {
        placeholderData: [],
        select: (data) => mentorListMockData,
    });
}

// FETCH ALL MENTOR API DETAILS
const getMentorList = () => 
    CallDataApi({url: `${web_url}user/getAllUser.php`});



export function useMentorByIdQuery(id?: number | null) {
    return useQuery(queryKeys.mentorById(id), getMentorById, {
      enabled: Boolean(id),
      select: (data) => mentorDetailsMockData,
    });
}
  
function getMentorById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.mentorById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
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
        url: `${web_url}transaction/single/createTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}

// USE TO UPDATE MENTOR
export function useUpdateMentorMutation() {
    const queryClient = useQueryClient();
    return useMutation(updateMentor, {
        onSuccess() {
            queryClient.invalidateQueries(queryKeys.mentorList);
        },
    });
}

// UPDATE MENTOR API DETAILS
const updateMentor = (data: MentorGetItem) => {
    return CallDataApi({
        url: `${web_url}transaction/single/updateTransaction.php`,
        method: 'POST',
        data: JSON.stringify({...data /* , token: getStorage('token') */})
    });
}