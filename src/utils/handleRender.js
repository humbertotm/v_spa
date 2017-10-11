import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import configureStore from '../redux/store/configureStore';
import App from '../shared/App';
import renderFullPage from './renderFullPage';


export default function handleRender(req, res) {
    // create a new store instance
    const store = configureStore()

    const html = renderToString(
        <Provider store={store}>
            <Router context={{}} location={req.url}>
                <App />
            </Router>
        </Provider>
    )

    // Grab the state from the store
    const preloadedState = store.getState();
    console.log(preloadedState)

    res.status(200).send(renderFullPage(html, preloadedState))
}