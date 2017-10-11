import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from '../../shared/App';


export default class Root extends Component {
    render() {
        return(
            <Router>
                <App />
            </Router>
        );
    }
}

