import React, { Component } from 'react';

class GalleryPost extends Component {
    render() {
        const { name } = this.props

        return(
            <li>
                <p>{name}</p>
            </li>
        );
    }
}

export default GalleryPost