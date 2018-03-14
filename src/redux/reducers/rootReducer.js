// All reducers will be combined in this file and exported as a single entity
// to be passed to the createStore function.
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { modal } from './modalReducer';
import { entities } from './entitiesReducer';
import { apiResponse } from './testReducer';
import { session } from './sessionReducer';
import { modalForm } from './modalFormReducer';
import { errorMessage } from './errorMessageReducer';
import { successMessage } from './successMessageReducer';

const rootReducer = combineReducers({
    modal,
    entities,
    apiResponse,
    session,
    modalForm,
    successMessage,
    errorMessage,
    form: formReducer
})

export default rootReducer