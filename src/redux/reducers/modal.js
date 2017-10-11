import { TOGGLE_MODAL } from '../actions/modal';

export function modalIsOpen(state = false, action) {
    switch(action.type) {
        case TOGGLE_MODAL:
            return !state

        default:
            return state
    }
}