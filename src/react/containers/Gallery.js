import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { callApi } from '../../redux/actions/mockApiCall'
// import { testActionCreator } from '../../redux/middleware/testApi'

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
        const postList = posts.map((post) =>
                <li>
                    <Post key={post._id} imageUrl={post.imageUrl} />
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

