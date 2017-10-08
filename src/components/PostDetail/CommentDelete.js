import React, { Component } from 'react'

class CommentDelete extends Component {
  
  onDelete = () => {
    const id = this.props.id
    this.props.onDelete(id) 
  }

  render() {
    return(
      <div className="Comment-Delete">
        <input
          onClick={this.onDelete} 
          type="button" 
          value="Delete"/>
      </div>
    )
  }
}

export default CommentDelete
