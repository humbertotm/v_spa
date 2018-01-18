// import { SESSION_TYPE } from '../actions/session'
import { LOG_IN } from '../actions/logIn';

/*
export function session(state = { loggedIn: false }, action) {
    if(action.type === SESSION_TYPE) {
        return Object.assign({}, state, {
            loggedIn: !state.loggedIn
        });
    }

    return state
}
*/

export function session(state = { loggedInUser: null }, action) {
    if(action.type === LOG_IN) {
        return Object.assign({}, state, {
            loggedInUser: action.userData
        });
    }
/*
    if(action.type === LOG_OUT) {
        return Object.assing({}, state, {
            loggedInUser: null
        })
    }
*/
    return state
}