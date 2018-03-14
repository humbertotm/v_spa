// Package imports
import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

// Components
import Post from '../components/Post';

class PostView extends Component {
    render() {
        const { match } = this.props
        return(
            <div>
                <Post name={match.params.postId} />
            </div>
        );
    }
}

export default withRouter(PostView)
