import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Gallery from './react/containers/Gallery';
import Root from './react/containers/Root'
import configureStore from './redux/store/configureStore';

// Extract the state sent from the server.
const preloadedState = window.__PRELOADED_STATE__

// Allow the initial state to go to garbage collection.
delete window.__PRELOADED_STATE__

// Redux Browser devTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Create a store instance with the initial state provided
const store = configureStore(preloadedState, devTools);

// Test statement
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));
