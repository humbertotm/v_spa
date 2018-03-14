import { TOGGLE_MODAL } from '../actions/modal';
import { LOG_IN } from '../actions/logIn';

export function modal(state = { isOpen: false }, action) {
    switch(action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                isOpen: !state.isOpen
            })

        case LOG_IN:
            return Object.assign({}, state, {
                isOpen: false
            })

        default:
            return state
    }
}