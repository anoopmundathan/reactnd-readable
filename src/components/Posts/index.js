import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'
import { Vote } from './Vote'

import Post from './Post'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, match } = this.props
    const postList = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    .map(post => (<li><Post post={post} /></li>))
       
    return(
      <div className="Posts">
        {postList.length > 0
        ? (
          <ul>
            {postList}
          </ul>
        )
        : (<div>Not Found</div>)
        }
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
