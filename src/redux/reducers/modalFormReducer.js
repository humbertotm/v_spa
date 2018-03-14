import { SET_FORM_PURPOSE } from '../actions/setFormPurpose';

export function modalForm(state = { currentFormIs: 'signup' }, action) {
    if(action.type === SET_FORM_PURPOSE) {
        return Object.assign({}, state, {
            currentFormIs: action.formPurpose
        });
    }

    return state
}