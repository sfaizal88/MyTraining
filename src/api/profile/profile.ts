/**
 * 
 * Profile API
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext, useQueryClient, useMutation} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/profile/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

// MOCK DATA
import {mockData as profileDetailsMockData} from '@/view/pages/profile/mock/details';

// GET PROFILE DETAILS BY USER ID
export function useProfileByUserIdQuery(id?: number | null) {
    return useQuery(queryKeys.profileByUserId(id), getProfileByUserId, {
      enabled: Boolean(id),
      select: (data) => profileDetailsMockData,
    });
}
  
function getProfileByUserId({
    queryKey: [{id}],
  }: QueryFunctionContext<ReturnType<typeof queryKeys.profileByUserId>>) {
    return CallDataApi({url: `${web_url}user/getAllUser.php`});
}