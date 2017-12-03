// This post component will render depending on the value of some props.
// Make sure to extract the rendering logic out of the render() function. Name
// the methods declaratively.
import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super()
        // this.setStylingClasses = this.setStylingClasses.bind(this)
        // this.setButtonsToBeRendered = this.setButtonsToBeRendered.bind(this)
    }

    setStylingClasses() {
        // this method will the set the styling classes that dicate the post
        // rendering specs depending on the route where it is rendered.
    }

    setButtonsToBeRendered() {
        // this method will define which buttons components is rendered
        // based on the current route.
    }

    render() {
        const { imageUrl } = this.props

        return(
            <p>{imageUrl}</p>
        );
    }
}

export default Post
