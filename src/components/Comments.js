import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCommentsAction } from '../actions'

class Comments extends Component {

  componentDidMount() {
    this.props.getComments(this.props.id)
  }

  render() {
    const { comments } = this.props
    const commentList = comments.map(comment => <li key={comment.id}>{comment.body}</li>)
    return(
      <div className="Comments">
        <ul>
          {commentList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (id) => dispatch(getCommentsAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
