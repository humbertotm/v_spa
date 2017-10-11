import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { url } = this.props
        return(
            <div>
                <h2>Post Component {url.url}</h2>
            </div>
        );
    }
}

export default Post
