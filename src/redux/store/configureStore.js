import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import api from '../middleware/api';

const configureStore = (preloadedState, devTools) => createStore(
    rootReducer,
    preloadedState,
    devTools,
    applyMiddleware(api)
);

export default configureStore