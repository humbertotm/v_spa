// All reducers will be combined in this file and exported as a single entity
// to be passed to the createStore function.
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { modalIsOpen } from './modal';
import { TOGGLE_MODAL } from '../actions/modal';
// Will probably have to import a redux form reducer to be included in our
// store.


const rootReducer = combineReducers({
    modalIsOpen,
    form: formReducer
})

export default rootReducer