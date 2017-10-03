import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, addCommentAction } from '../../actions'
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
    console.log('change')
    this.setState({
      txtComment: e.target.value
    })
  }

  onCommentSubmit = (e) => {
    e.preventDefault();
    if (this.state.txtComment) {
      const newComment = {
        id: uuidv1(),
        timestamp: Date.now(),
        body: this.state.txtComment,
        author: this.props.post.post.author,
        parentId: this.props.post.post.id
      } 
      // POST new comment
      this.props.addComment(newComment)
    }
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore, timestamp } = this.props.post.post
    let commentList = null
    if (this.props.post.post.comments) {
      commentList = this.props.post.post.comments.map(comment => {
        return (
          <li key={comment.id}>
            {comment.body}
            <a href="">edit</a>
            <a href="">delete</a>
          </li>
        )
      })
    }

    return(
      <div className="PostDetail">
        <p>{author} Posted on {timestamp} </p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <hr/>
        <form 
          className="CommentForm"
          onSubmit={this.onCommentSubmit}>
            <textarea 
                placeholder="Enter your comments..."
                onChange={this.onInputChange} 
                value={this.state.txtComment}
                name="comments" 
                id="" 
                cols="30" 
                rows="5" />
            <input 
              className="Comment-Button"
              value="Add Comment"
              type="submit"/>
        </form>
        <hr/>
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
    getPost: (id) => dispatch(fetchPost(id)),
    addComment: (comment) => dispatch(addCommentAction(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
