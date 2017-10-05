import React, { Component } from 'react'

const CommentBody = (props) => {
  return(
    <div className="Comment-Body">
      {props.body}
    </div>
  )
}

const CommentEdit = () => {
  return(
    <div className="Edit">
      <input type="button" value="Edit" />
    </div>
  )
}

const CommentDelete = () => {
  return(
    <div className="Delete">
      <input type="button" value="Delete"/>
    </div>
  )
}

const CommentContainer = (props) => {
  return(
    <div className="Comment-Container">
      <CommentBody body={props.body}/>
      <div className="Comment-Edit-Delete">
        <CommentEdit />  
        <CommentDelete />  
      </div>
    </div>
  )
}

export class CommentList extends Component {
  render() {

    let commentList = null

    if (this.props.comments) {
      commentList = this.props.comments.map(comment => (
        <li 
          className="Comment"
          key={comment.id}>
          <CommentContainer body={comment.body}/>
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
