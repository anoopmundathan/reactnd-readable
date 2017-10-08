import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, addCommentAction } from '../../actions'
import uuidv1 from 'uuid/v1'
import PostInfo from './PostInfo'
import { CommentForm } from './CommentForm'
import CommentList from './CommentList'

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
    const { post } = this.props.post
    const { comments } = this.props.post.post
    return(
      <div className="PostDetail">
        <PostInfo post={post} />
        <CommentForm
          txtComment={this.state.txtComment}
          onCommentSubmit={this.onCommentSubmit}
          onInputChange={this.onInputChange} />
        <CommentList comments={comments} />
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
