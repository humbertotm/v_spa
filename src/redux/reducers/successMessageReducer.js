import { SET_SUCCESS_MESSAGE } from '../actions/setSuccessMessage';

export function successMessage(state = { message: null }, action) {
    if(action.type === SET_SUCCESS_MESSAGE) {
        return Object.assign({}, state, {
            message: action.message
        })
    }

    return state
}