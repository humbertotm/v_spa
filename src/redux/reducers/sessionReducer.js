import { SESSION_TYPE } from '../actions/session'

export function session(state = { loggedIn: false }, action) {
    if(action.type === SESSION_TYPE) {
        return Object.assign({}, state, { loggedIn: !state.loggedIn });
    }

    return state
}