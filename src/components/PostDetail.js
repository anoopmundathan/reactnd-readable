import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAction } from '../actions'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
    const { author, body, category, title } = this.props.post.post
    return(
      <div>
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
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
    getPost: (id) => dispatch(getPostAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
