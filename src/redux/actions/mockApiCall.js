// Mock action creator to call api through middleware.
import { CALL_API } from '../middleware/testApi';

export const REQUEST_TYPE = 'REQUEST_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const FAILURE_TYPE = 'FAILURE_TYPE';


export function callApi() {
    return({
        [CALL_API]: {
            types: [ REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE]
        }
    });
}
