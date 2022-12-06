/**
 * 
 * Geneic call API
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { trackPromise} from 'react-promise-tracker';

// UTILS IMPORT
import {apiFailed} from '@/utils/constants';
import {validationMessages} from '@/utils/validationMessages';

// GENERIC API TYPE
type ApiOptionType = {
    url: string, 
    method?: string,
    data?: any,
}

// GENERICL FETCH POST / GET API CALL
export const CallDataApi = async({
    url,
    method = 'GET',
    data
}: ApiOptionType) => {
    // CREATING THE API CALL
    const response = await trackPromise(fetch(url, data && {
        method, body: data
    }));
    // WAITING FOR DATA REPONSE
    const responseObject = await response.json();
    
    // CHECKING WHETHER ERROR OCCURED
    if (responseObject.code === apiFailed && !['ERROR_005'].includes(responseObject.output)) {
        // FINDING ERROR MESSAGE BY ERROR ID
        const getErrorMessage = validationMessages[responseObject.output];
        // THROW ERROR 
        throw Error(getErrorMessage()).message;
    }
    // IF NO ERROR, THROW THE RESPOSE DATA
    return responseObject.output;
};