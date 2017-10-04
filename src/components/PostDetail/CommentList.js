import React from 'react'

export const CommentList = (props) => {
  let commentList = null

  if (props.comments) {
    commentList = props.comments.map(comment => (
      <li 
        className="Comment"
        key={comment.id}>
        <div className="Comment-Container">
          <div className="Comment-Body">
            {comment.body}
          </div>
          <div className="Comment-Edit-Delete">
            <div className="Edit">
              <input type="button" value="Edit" />
            </div>
            <div className="Delete">
              <input type="button" value="Delete"/>
            </div>
          </div>
        </div>
      </li>
    ))
  }

  return(
    <div className="CommentList">
      <ul className="comments">
        {commentList}
      </ul>
    </div>
  )
}
