import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'
import './PostDetail.css'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post.post
    let commentList = null
    if (this.props.post.post.comments) {
      commentList = this.props.post.post.comments.map(comment => {
        return (<li key={comment.id}>{comment.body}</li>)
      })
    }

    return(
      <div className="PostDetail">
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
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
