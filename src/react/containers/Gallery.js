import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Post from './Post'
import { connect } from 'react-redux';

class Gallery extends Component {
    render() {
        const { match, modalIsOpen } = this.props
        return(
            <div>
                <h1>Gallery {match.url}</h1>
                <Post url={match} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalIsOpen: state.modalIsOpen
    }
}

export default withRouter(connect(mapStateToProps)(Gallery))
