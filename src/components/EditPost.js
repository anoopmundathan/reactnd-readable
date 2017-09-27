import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class EditPost extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
    const { author, body, category, title, voteScore } = this.props.post.post
    
    return(
      <div>
        <input 
            type="text" 
            placeholder="Title"
            value={title} />
        <textarea 
          value={body}
          cols="5" 
          rows="5" />
        <input 
            type="text" 
            value={author} />
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
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
