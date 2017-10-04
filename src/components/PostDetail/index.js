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
        .then(() => {
          this.setState({
            txtComment: ''
          })
        })
    }
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore, timestamp } = this.props.post.post
    let commentList = null
    if (this.props.post.post.comments) {
      commentList = this.props.post.post.comments.map(comment => {
        return (
          <li 
            key={comment.id}>
            {comment.body}
          </li>
        )
      })
    }

    return(
      <div className="PostDetail-Container">
        <div className="PostDetail">
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Posted on {timestamp} by {author}</p>
          <p>{category}</p>
          <p>{voteScore}</p>
        </div>
        <hr/>
        <div className="CommentForm">
          <form
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

        </div>
        <hr/>
        <div className="CommentList">
          <ul>{commentList}</ul>
        </div>
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
