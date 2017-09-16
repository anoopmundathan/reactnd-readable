import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePosts } from '../../actions'
import { Vote } from './Vote'

import Post from './Post'

class Posts extends Component {

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.props.deletePosts()
    }
    this.props.getPosts()
  }

  render() {
    const { posts, match } = this.props
    const filteredPosts = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    
    let postList
    if (filteredPosts.length > 0) {
      postList = filteredPosts.map(post => (<li key={post.id}><Post post={post} /></li>))
    }
    
    return(
      <div className="Posts">
        {filteredPosts.length > 0
        ? postList.length > 0 ? (<ul>{postList}</ul>) : (<div>Not Found</div>)
        : (<h1>...</h1>)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
    deletePosts: () => dispatch(deletePosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
