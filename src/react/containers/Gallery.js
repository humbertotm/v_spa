import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from '../components/Post';
// import { loadOrFetchPost } from 'some/action/file/path'

class Gallery extends Component {
    constructor() {
        super()
        // this.fetchMorePosts = this.fetchMorePosts.bind(this)
    }

/*
    componentDidMount() {
        // Dispatch action to load or fetch posts.
    }
*/

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
        const postList = posts.map((post) => {
            return(
                <li>
                    <Post key={post.id} name={post.name} />
                </li>
            );
        })

        return(
            <ul>{postList}</ul>
        );
    }
}

/*
const mapDispatchToProps = dispatch => {
    return {
        loadOrFetchPosts: () => {
            return dispatch(loadOrFetchPosts())
        }
    }
}
*/

const mapStateToProps = state => {
    return {
        posts: state.entities.posts
    }
}

export default withRouter(connect(mapStateToProps)(Gallery))
