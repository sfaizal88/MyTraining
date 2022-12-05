/**
 * 
 * User API
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useMutation} from '@tanstack/react-query';

// UTILS IMPORT
import {api_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

export type UserGetItem = {
    username: string;
    password: string;
}

// USE TO LOGIN USER
export function useLoginMutation() {
    return useMutation(loginUser);
}

// CREATE MENTOR API DETAILS
const loginUser = (data: UserGetItem) => {
    return CallDataApi({
        url: `${api_url}login.php`,
        method: 'POST',
        data: JSON.stringify({...data})
    });
}