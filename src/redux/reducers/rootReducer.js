// All reducers will be combined in this file and exported as a single entity
// to be passed to the createStore function.
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { modalIsOpen } from './modal';
import { entities } from './entities';
import { TOGGLE_MODAL } from '../actions/modal';
import { apiResponse } from './testReducer';
import { session } from './sessionReducer';
import { errorMessage } from './errorMessageReducer';

const rootReducer = combineReducers({
    modalIsOpen,
    entities,
    apiResponse,
    session,
    errorMessage,
    form: formReducer
})

export default rootReducer