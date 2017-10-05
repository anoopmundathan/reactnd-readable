import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCommentAction } from '../../actions'

class CommentBody extends Component {
  state = {
    comment: ''
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
        </div>
      )
    } else {
      return(
        <div className="Comment-Body">
          {this.props.body}
        </div>
      )
    }
  }
}

class CommentEdit extends Component {

  onEdit = () => {
    const id = this.props.id
    if(!this.props.edit && this.props.editId) {
      this.props.onEdit(null)
    } else {
      this.props.onEdit(id) 
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

const CommentContainer = (props) => {
  return(
    <div className="Comment-Container">
      <CommentBody id={props.id} editId={props.editId} body={props.body}/>
      <div className="Comment-Edit-Delete">
        <CommentEdit id={props.id} editId={props.editId} onEdit={props.onEdit}/>  
        <CommentDelete id={props.id} onDelete={props.onDelete}/>  
      </div>
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

  onEdit = (id) => {
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
    deleteComment: (id) => dispatch(deleteCommentAction(id))
  }
}

export default connect(null, mapDispatchToProps)(CommentList)
