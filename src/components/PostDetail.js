import React, { Component } from 'react'
import { getPost } from '../utils/ReadableAPI'

class PostDetail extends Component {

  state = {
    post: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    
    getPost(id)
      .then(data => {
        const { title, body, author, category, voteScore } = data
        this.setState({
          post: {
            title,
            body,
            author,
            category,
            voteScore
          }
        })
      })
  }

  render() {
    const { title, body, author, category, voteScore } = this.state.post
    return(
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{voteScore}</p>
      </div>
    )
  }
}

export default PostDetail
