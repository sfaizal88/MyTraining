/**
 * 
 * Profile API
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/profile/queryKeys';

// UTILS IMPORT
import {api_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// UTILS IMPORT
import {getStorage} from '@/utils/helper';

// GET PROFILE DETAILS BY USER ID
export function useProfileByUserIdQuery(id?: number | null) {
    return useQuery(queryKeys.profileByUserId(id), getProfileByUserId, {
      enabled: Boolean(id),
    });
}

// CALL PROFILE DETAILS API
function getProfileByUserId({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.profileByUserId>>) {
    return CallDataApi({url: `${api_url}profile/getStudentByUserId.php?student_id=${id}&token=${getStorage('token')}`});
}

// GET TECHNOLOGY STACK DETAILS BY STUDENT ID
export function useTechStackByStudentIdQuery(student_id?: number | null) {
    return useQuery(queryKeys.techStackByStudentId(student_id), getTechStackByStudentIdQuery, {
      enabled: Boolean(student_id),
    });
}

// CALL TECHNOLOGY STACK DETAILS BY STUDENT ID API
function getTechStackByStudentIdQuery({
    queryKey: [{student_id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.techStackByStudentId>>) {
    return CallDataApi({url: `${api_url}profile/getTechStackByStudentId.php?student_id=${student_id}&token=${getStorage('token')}`});
}