import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePosts } from '../../actions'
import Post from './Post'
import SortBy from './SortBy'

import './Posts.css'
class Posts extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.props.deletePosts()
    }
    this.props.getPosts()
      .then(() => {
        this.setState({
          loaded: true
        })
      })
  }

  render() {
    const { posts, match } = this.props
    const { loaded } = this.state
    const filteredPosts = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    
    let postList

    // TODO - write this in better way - DRY principle
    if (filteredPosts.length > 0) {
      if(this.props.sort === 'popular') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return -1
          } else {
            return 1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      } else if(this.props.sort === 'unpopular') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return 1
          } else {
            return -1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      } else if(this.props.sort === 'date') {
        postList = filteredPosts.sort((a, b) => {
          if(a.timestamp > b.timestamp) {
            return 1
          } else {
            return -1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      }
    } 
    return(
      <div className="Posts">
        <SortBy />
          {!this.state.loaded && 
            <p>Loading...</p>
          }
          { filteredPosts.length > 0
            ? postList.length > 0 
            ? (<ul>{postList}</ul>) 
            : (<div>Not Found</div>)
            : (<p>No Posts</p>)
          }
      </div>
    )    
  }
}

const mapStateToProps = ({ posts, sort }) => {
  return {
    posts: posts.posts,
    sort: sort.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
    deletePosts: () => dispatch(deletePosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
