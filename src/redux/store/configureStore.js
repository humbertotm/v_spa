import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import api from '../middleware/testApi';

/*
const configureStore = (preloadedState, devTools) => createStore(
    rootReducer,
    preloadedState,
    devTools,
    applyMiddleware(api)
);
*/

const storeWithMiddleware = applyMiddleware(api)(createStore);
const store = (preloadedState, devTools) => storeWithMiddleware(
    rootReducer,
    preloadedState,
    devTools
)

// export default configureStore
export default store