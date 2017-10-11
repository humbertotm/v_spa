import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SinglePost extends Component {
    render() {
        const { match } = this.props
        return(
            <div>
                <h4>Hello from single post {match.url}</h4>
            </div>
        );
    }
}

export default withRouter(SinglePost)