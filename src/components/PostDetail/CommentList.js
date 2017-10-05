import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCommentAction } from '../../actions'

const CommentBody = (props) => {
  return(
    <div className="Comment-Body">
      {props.body}
    </div>
  )
}

const CommentEdit = (props) => {
  return(
    <div className="Edit">
      <input 
        onClick={props.onEdit}
        type="button" 
        value="Edit" />
    </div>
  )
}

class CommentDelete extends Component {

  onDelete = () => {
    const id = this.props.id
    this.props.onDelete(id) 
  }

  render() {
    return(
      <div className="Delete">
      <input
        onClick={this.onDelete} 
        type="button" 
        value="Delete"/>
    </div>
    )
  }
}

const CommentContainer = (props) => {
  return(
    <div className="Comment-Container">
      <CommentBody body={props.body}/>
      <div className="Comment-Edit-Delete">
        <CommentEdit id={props.id} onEdit={props.onEdit}/>  
        <CommentDelete id={props.id} onDelete={props.onDelete}/>  
      </div>
    </div>
  )
}

class CommentList extends Component {

  onDelete = (id) => {
    this.props.deleteComment(id)
  }

  onEdit = (id) => {
    console.log('edit')
  }

  render() {

    let commentList = null

    if (this.props.comments) {
      commentList = this.props.comments.map(comment => (
        <li 
          className="Comment"
          key={comment.id}>
          <CommentContainer
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            id={comment.id}
            body={comment.body}/>
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
    deleteComment: (id) => dispatch(deleteCommentAction(id))
  }
}

export default connect(null, mapDispatchToProps)(CommentList)
