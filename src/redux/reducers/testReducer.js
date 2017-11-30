// Start here. Just need to create this reducer to set a new piece of state
// from the testActionCreator. After this, we will continue with the Api call.
// import type variables
import { REQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE } from '../actions/mockApiCall';

export function apiResponse(state = { response: 'No request yet.' }, action) {
    switch(action.type) {
        case REQUEST_TYPE:
            return Object.assign({}, state, {
                response: 'Request'
            });

        case SUCCESS_TYPE:
            return Object.assign({}, state, {
                response: 'Success!'
            });

        case FAILURE_TYPE:
            return Object.assign({}, state, {
                response: 'Failure =/'
            });

        default:
            return state
    }
}

