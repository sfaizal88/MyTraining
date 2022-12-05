/**
 * 
 * Mock Interview API
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/mockInterview/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// UTILS IMPORT
import {MockInterviewStatusType} from '@/utils/enum';

// MOCK DATA
import {mockData as mockInterviewDetailsMockData} from '@/view/pages/profile/components/mockInterview/mock/details';

export type MockInterviewGetItem = {
    id: number;
    title: string;
    details: string;
    review: string;
    interviewer: number;
    students: number;
    status: MockInterviewStatusType;
    meeting_link: string;
    interview_date: string;
}


export function useMockInterviewByIdQuery(id?: number | null) {
    return useQuery(queryKeys.mockInterviewById(id), getMockInterviewById, {
      enabled: Boolean(id),
      select: (data) => mockInterviewDetailsMockData,
    });
}
  
function getMockInterviewById({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.mockInterviewById>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}

// USE TO CREATE MOCK INTERVIEW
export function useCreateMockInterviewMutation() {
  const queryClient = useQueryClient();
  return useMutation(createMockInterview, /*{
      onSuccess() {
      queryClient.invalidateQueries(queryKeys.studentList);
      },
  }*/);
}

// CREATE MOCK INTERVIEW API DETAILS
const createMockInterview = (data: MockInterviewGetItem) => {
  return CallDataApi({
      url: `${web_url}transaction/single/createTransaction.php`,
      method: 'POST',
      data: JSON.stringify({...data /* , token: getStorage('token') */})
  });
}

// USE TO UPDATE MOCK INTERVIEW
export function useUpdateMockInterviewMutation() {
  const queryClient = useQueryClient();
  return useMutation(updateMockInterview/*, {
      onSuccess() {
          queryClient.invalidateQueries(queryKeys.studentList);
      },
  }*/);
}

// UPDATE SINGLE MOCK INTERVIEW API DETAILS
const updateMockInterview = (data: MockInterviewGetItem) => {
  return CallDataApi({
      url: `${web_url}transaction/single/updateTransaction.php`,
      method: 'POST',
      data: JSON.stringify({...data /* , token: getStorage('token') */})
  });
}