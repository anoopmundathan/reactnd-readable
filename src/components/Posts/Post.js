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
import { CommentsCount } from './Comments'
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
    this.props.getComments(this.props.post.id)
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
    
    return(  
      <div className="Post">
        <Title 
          post={this.props.post} />
        <div className="Post-Info">
          <Author author={author} />

          {posts[index].comments && (
            <CommentsCount 
            count={posts[index].comments.length} />
          )}
          
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
    getComments: (id) => dispatch(getCommentsAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
