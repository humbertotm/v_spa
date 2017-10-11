import React, { Component } from 'react';

class Post extends Component {
    extractProp() {
        const { lastProp } = this.props

        if(lastProp.params) {
            return `We have ${lastProp.params.categoryId}!`
        }

        return `We do not have params ${lastProp.url}`
    }

    render() {
        const { lastProp } = this.props
        return(
            <div>
                <h3>We are at the presentational component {this.extractProp()}</h3>
            </div>
        );
    }
}

export default Post