import React, { Component } from 'react'

export class CommentForm extends Component {

  render() {
    return(
      <div className="CommentForm">
        <form
          onSubmit={this.props.onCommentSubmit}>
            <textarea 
                placeholder="Enter your comments..."
                onChange={this.props.onInputChange} 
                value={this.props.txtComment}
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
    )
  }
}
