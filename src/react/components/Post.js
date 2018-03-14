// Package imports
import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { imageUrl } = this.props

        return(
            <p>{imageUrl}</p>
        );
    }
}

export default Post
