import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  deletePostAction, 
  upVoteAction, 
  downVoteAction,
  getCommentsAction
 } from '../../actions'

import { Title } from './Title'
import { Author } from './Author'
import { Count } from './Count'
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
    this.props.getComments('posts', this.props.post.id)
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
                  : 0
    return(  
      <div className="Post">
        <Title 
          post={this.props.post} />
        <div className="Post-Info">
          <Author author={author} />
          <Count count={count} />
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
const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id)),
    getComments: (from, id) => dispatch(getCommentsAction(from, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
