import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect  } from 'react-router-dom'

import Vote from '../Vote'

import { 
  upVotePostAction, 
  downVotePostAction,
  removePostAction
 } from '../../actions'

class PostInfo extends Component {
  
  state = {
    deleted: false
  }

  onDelete = (id) => {
    this.props.removePost(id)
      .then(() => {
        this.setState({
          deleted: true
        })
      })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render() {
    const { id, author, body, category, title, voteScore, timestamp } = this.props.post

    if (this.state.deleted) {
      return (<Redirect to='/' />)
    } else {
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
              <div className="Post-Info-Edit-Delete-Container">
                <div className="Post-Info-Edit-Delete-Right">
                </div>
                <div className="Post-Info-Edit-Delete">
                  <div className="Post-Info-Edit">
                    <Link to={`/edit/${id}`}>Edit</Link>
                  </div>
                  <div 
                    onClick={() => this.onDelete(id)}
                    className="Post-Info-Delete">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVotePostAction(id)),
    downVote: (id) => dispatch(downVotePostAction(id)),
    removePost: (id) => dispatch(removePostAction(id))
    
  }
}

export default connect(null, mapDispatchToProps)(PostInfo)
