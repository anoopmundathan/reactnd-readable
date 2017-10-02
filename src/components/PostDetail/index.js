import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'
import { addComment } from '../../utils/ReadableAPI'
import uuidv1 from 'uuid/v1'

import './PostDetail.css'

class PostDetail extends Component {
  
  state = {
    txtComment: ''
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  onInputChange = (e) => {
    this.setState({
      txtComment: e.target.value
    })
  }
  onCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: this.state.txtComment,
      author: this.props.post.post.author,
      parentId: this.props.post.post.id
    } 

    // POST new comment
    addComment(newComment)
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post.post
    let commentList = null
    if (this.props.post.post.comments) {
      commentList = this.props.post.post.comments.map(comment => {
        return (<li key={comment.id}>{comment.body}</li>)
      })
    }

    return(
      <div className="PostDetail">
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <hr/>
        
        <form onSubmit={this.onCommentSubmit}>
          <input
            onChange={this.onInputChange} 
            value={this.state.txtComment}
            type="text"/>
          <input type="submit"/>
        </form>

        <ul>{commentList}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
