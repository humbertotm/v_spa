import { TOGGLE_FORM_PURPOSE } from '../actions/toggleFormPurpose';

export function signupLoginForm(state = { currentFormIsSignUp: false }, action) {
    if(action.type === TOGGLE_FORM_PURPOSE) {
        return Object.assign({}, state, {
            currentFormIsSignUp: !state.currentFormIsSignUp
        });
    }

    return state
}