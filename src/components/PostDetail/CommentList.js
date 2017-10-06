import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  deleteCommentAction,
  editCommentAction
 } from '../../actions'

class CommentEdit extends Component {

  onEdit = () => {
    if(this.props.editId) {
      this.props.onEdit(null, this.props.editId)
    } else {
      this.props.onEdit(this.props.id, null)
    }
  }
  
  render() {
    let buttonValue
    if (this.props.editId === this.props.id) {
      buttonValue = this.props.editId ? 'Save' : 'Edit'
    } else {
      buttonValue = 'Edit'
    }

    return(
      <div className="Edit">
        <input 
          onClick={this.onEdit}
          type="button" 
          value={buttonValue} />
      </div>
    )
  }
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

class CommentBody extends Component {
  state = {
    comment: ''
  }

  onEdit = (id, editId) => {
    this.props.onEdit(id, editId, this.state.comment)
  }

  onDelete = (id) => {
    this.props.onDelete(id)
  }

  componentDidMount() {
    const { body } = this.props
    this.setState({
      comment: body
    })
  }

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  render() {
    if(this.props.editId === this.props.id) {
      return(
        <div className="Comment-Body">
          <input
            onChange={this.onChangeComment} 
            value={this.state.comment}
            type="text"/>
          <div className="Comment-Edit-Delete">
            <CommentEdit 
              id={this.props.id} 
              edit={this.props.edit}
              editId={this.props.editId} 
              onEdit={this.onEdit}/>  
            <CommentDelete 
              id={this.props.id} 
              onDelete={this.onDelete}/>
          </div>
        </div>
      )
    } else {
      return(
        <div className="Comment-Body">
          {this.state.comment}
          <div className="Comment-Edit-Delete">
            <CommentEdit 
              id={this.props.id} 
              editId={this.props.editId} 
              onEdit={this.props.onEdit}/>  
            <CommentDelete 
              id={this.props.id} 
              onDelete={this.props.onDelete}/>
          </div>
        </div>
      )
    }
  }
}


const CommentContainer = (props) => {
  return(
    <div className="Comment-Container">
      <CommentBody {...props} />
    </div>
  )
}

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
            editId={this.state.editId}
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
    deleteComment: (id) => dispatch(deleteCommentAction(id)),
    editComment: (id, comment) => dispatch(editCommentAction(id, comment))
  }
}

export default connect(null, mapDispatchToProps)(CommentList)
