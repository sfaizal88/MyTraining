/**
 * 
 * User API
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useQuery, QueryFunctionContext} from '@tanstack/react-query';

// API IMPORT
import queryKeys from '@/api/student/queryKeys';

// UTILS IMPORT
import {web_url} from '@/api/constants';

// API IMPORT 
import {CallDataApi} from '@/api/apiCalls';

export type UserGetItem = {
    username: string;
    password: string;
}