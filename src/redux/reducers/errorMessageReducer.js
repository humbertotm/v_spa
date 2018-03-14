import { SET_ERROR_MESSAGE } from '../actions/setErrorMessage';

export function errorMessage(state = { message: null }, action) {
    if(action.type === SET_ERROR_MESSAGE) {
        return Object.assign({}, state, {
            message: action.error
        })
    }

    return state
}