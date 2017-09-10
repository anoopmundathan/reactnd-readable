import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostAction } from '../actions'
import Comments from './Comments'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post.post
    return(
      <div>
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <Comments id={id}/>
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
