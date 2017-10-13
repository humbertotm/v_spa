// All reducers will be combined in this file and exported as a single entity
// to be passed to the createStore function.
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { modalIsOpen } from './modal';
import { entities } from './entities';
import { TOGGLE_MODAL } from '../actions/modal';

const rootReducer = combineReducers({
    modalIsOpen,
    entities,
    form: formReducer
})

export default rootReducer