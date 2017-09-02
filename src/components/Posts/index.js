import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'

import Post from './Post'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    const postList = posts.map(post => (<li><Post post={post} /></li>))
    return(
      <div className="Posts">
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    posts: post.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
