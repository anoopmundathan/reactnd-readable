import React, { Component } from 'react'
import { getAllPosts } from '../utils/ReadableAPI'

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    getAllPosts()
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }

  render() {
    const { posts } = this.state
    const postList = posts.map(post => <li>{post.body}</li>)
    return(
      <div>
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
}

export default Posts
