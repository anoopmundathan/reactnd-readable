import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  deletePostAction, 
  upVoteAction, 
  downVoteAction
 } from '../../actions'

import Vote from '../Vote/'
import { Title } from './Title'
import { Author } from './Author'
import { Count } from './Count'
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
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'
    return(  
      <div className="Post">
        <Vote 
          id={id}
          score={score}
          onClickDownVote={this.onClickDownVote}
          onClickUpVote={this.onClickUpVote} />
        <div className="Title-PostInfo-Container">
          <div className="Title-PostInfo">
            <Title 
              post={this.props.post} />
            <div className="PostInfo">
              <Author author={author} />
              <Count count={count} />
              <Edit id={id} />
              <Delete id={id} onDeleteClick={this.onDeleteClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
