import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import Vote from '../Vote/'

import { 
  deleteCommentAction,
  editCommentAction,
  upVoteCommentAction,
  downVoteCommentAction
 } from '../../actions'


class CommentList extends Component {

  state = {
    edit: false,
    editId: ''
  }

  onDelete = (id) => {
    this.props.deleteComment(id)
  }

  onEdit = (id, editId, comment) => {
    if (comment) {
      this.props.editComment(editId, {
        timestamp: Date.now(),
        body: comment
      })
    }

    this.setState({
      edit: !this.state.edit,
      editId: id
    })
  }

  onClickUpVote = (id) => {
    this.props.upVoteComment(id)
  }

  onClickDownVote = (id) => {
    this.props.downVoteComment(id)
  }

  render() {

    let commentList = null

    //  Ordered by voteScore (highest first)
    if (this.props.comments) {
      commentList = this.props.comments.sort((a, b) => {
        if(a.voteScore > b.voteScore) {
          return -1
        } else {
          return 1
        }
        return 0
      }).map(comment => (
        <li 
          key={comment.id}>
          <div className="Comment-Container">
            <Vote 
              id={comment.id}
              score={comment.voteScore}
              onClickUpVote={this.onClickUpVote} 
              onClickDownVote={this.onClickDownVote} />
            <Comment 
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              editId={this.state.editId}
              id={comment.id}
              body={comment.body}/>
          </div>  
        </li>
      ))
    }

    return(
      <div className="CommentList">
        <ul className="Comments">
          {commentList}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteCommentAction(id)),
    editComment: (id, comment) => dispatch(editCommentAction(id, comment)),
    upVoteComment: (id) => dispatch(upVoteCommentAction(id)),
    downVoteComment: (id) => dispatch(downVoteCommentAction(id))
  }
}

export default connect(null, mapDispatchToProps)(CommentList)
