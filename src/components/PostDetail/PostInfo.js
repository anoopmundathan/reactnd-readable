import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Vote from '../Vote'

import { 
  upVoteAction, 
  downVoteAction
 } from '../../actions'

class PostInfo extends Component {
  
  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render() {
    const { id, author, body, category, title, voteScore, timestamp } = this.props.post
    return(
      <div className="Post-Info">
        <div className="Post-Info-Vote">
          <Vote 
            id={id}
            score={voteScore}
            onClickUpVote={this.onClickUpVote} 
            onClickDownVote={this.onClickDownVote} />
        </div>
        <div className="Post-Info-Container">
          <div className="Post-Info-Title">
            <h3>{title}</h3>
          </div>
          <div className="Post-Info-Time-Author">
            <span><b>Posted on</b> {timestamp} by <b>{author}</b></span>
          </div>
          <div className="Post-Info-Body">
            <p>{body}</p>
          </div>
          <div className="Post-Info-Category-Container">
            <div className="Post-Info-Category">
              <span><b>Category: </b>{category}</span>
            </div>
            <div className="Post-Info-Edit">
              <Link to={`/edit/${id}`}>Edit</Link>
            </div>
            <div className="Post-Info-Delete">
              Delete
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(null, mapDispatchToProps)(PostInfo)
