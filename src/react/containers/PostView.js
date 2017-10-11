import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class PostView extends Component {
    render() {
        const { match } = this.props
        return(
            <div>
                <h2>{match.params.postId}</h2>
            </div>
        );
    }
}

export default withRouter(PostView)