import { LOG_IN } from '../actions/logIn';

export function session(state = { loggedInUser: null }, action) {
    if(action.type === LOG_IN) {
        return Object.assign({}, state, {
            loggedInUser: action.userData
        });
    }

    // if(action.type === LOG_OUT) {
    //     return Object.assing({}, state, {
    //         loggedInUser: null
    //     })
    // }

    return state
}