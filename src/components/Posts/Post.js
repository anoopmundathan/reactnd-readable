import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePostAction, upVoteAction, downVoteAction } from '../../actions'

import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Points } from './Points'
import { Vote } from './Vote'
import { Edit } from './Edit'
import { Delete } from './Delete'

class Post extends Component {
  state = {
    score: 0
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      score: this.state.score + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({
      score: this.state.score - 1
    })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      score: voteScore
    })
  }

  render() {
    const { body, title, author, id } = this.props.post
    const { score } = this.state

    return(  
      <div className="Post">
        <Title 
          post={this.props.post} />
        <div className="Post-Info">
          <Author author={author} />
          <Comments />
          <Points point={score} />
          <Vote 
            id={id} 
            onClickDownVote={this.onClickDownVote}
            onClickUpVote={this.onClickUpVote} />
          <Edit />
          <Delete id={id} onDeleteClick={this.onDeleteClick}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(null, mapDispatchToProps)(Post)
