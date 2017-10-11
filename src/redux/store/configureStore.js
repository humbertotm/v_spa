import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer'

const configureStore = (preloadedState, devTools) => createStore(
    rootReducer,
    preloadedState,
    devTools
    // applyMiddleware(middlewares)
);

export default configureStore