import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAction, getCommentsAction } from '../actions'
import Comments from './Comments'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    this.props.getComments('post', id)
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post.post
    let commentList = null
    if (this.props.post.post.comments) {
      commentList = this.props.post.post.comments.map(comment => {
        return (<li>{comment.body}</li>)
      })
    }

    return(
      <div>
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <ul>{commentList}</ul>
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
    getPost: (id) => dispatch(getPostAction(id)),
    getComments: (from, id) => dispatch(getCommentsAction(from, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
