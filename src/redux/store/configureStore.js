import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import api from '../middleware/testApi';

// Apply middleware to store
const storeWithMiddleware = applyMiddleware(api)(createStore);
const store = (preloadedState, devTools) => storeWithMiddleware(
    rootReducer,
    preloadedState,
    devTools
)

// export default configureStore
export default store