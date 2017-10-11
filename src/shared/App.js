import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import Gallery from '../react/containers/Gallery';
import PostView from '../react/containers/PostView';
import UserProfile from '../react/containers/UserProfile';
import Settings from '../react/containers/Settings';
import NotFound from '../react/components/NotFound';
import ModalButton from '../react/containers/ModalButton';
// import TestComponent from '../react/components/TestComponent';

class App extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/fresh'>Fresh</Link></li>
                </ul>

                <ModalButton />

                <Switch>
                    <Route exact={true} path='/' component={Gallery} />
                    <Route exact={true} path='/fresh' component={Gallery} />
                    <Route exact={true} path='/category/:categoryName' component={Gallery} />
                    <Route exact={true} path='/post/:postId' component={PostView} />
                    <Route exact={true} path='/u/:userId' component={UserProfile} />
                    <Route exact={true} path='/feed' component={Gallery} />
                    <Route exact={true} path='/settings' component={Settings} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App
