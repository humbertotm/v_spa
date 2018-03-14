// Package imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Post from '../components/Post';

// Action creators
import { callApi } from '../../redux/actions/mockApiCall'

class Gallery extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // Dispatch action to load or fetch posts.
        console.log(this.props);
        this.props.mockApiCall();

    }


    componentDidUpdate() {
        console.log('Component updated by change in route!')
    }

/*
    fetchMorePosts() {
        // Dispatch action to fetch more posts.
    }
*/

    render() {
        // Not sure ul and li tags are the approppriate ones for this use case.
        const { posts } = this.props

        const postList = posts.map((post, index) =>
                <li key={index}>
                    <Post imageUrl={post.imageUrl} />
                </li>
        )

        return(
            <ul>
                {postList}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        mockApiCall: () => {
            dispatch(callApi());
        }
    });
}

function mapStateToProps(state) {
    return {
        posts: state.entities.posts
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gallery))

