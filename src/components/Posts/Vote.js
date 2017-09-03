import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upVoteAction } from '../../actions' 

class Vote extends Component {
  onClickUpVote = () => {
    this.props.upVote(this.props.id)
  }

  onClickDownVote = () => {
    
  }

  render() {
    return(
      <div className="Vote">
        <Up onClickUpVote={this.onClickUpVote}/>
        <Down onClickDownVote={this.onClickDownVote}/>
      </div>
    )
  }
}

const Up = (props) => {
  return(
    <div 
      className="Up"
      onClick={props.onClickUpVote}>
    </div>
  )
}

const Down = (props) => {
  return(
    <div 
      className="Down"
      onClick={props.onClickDownVote}>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteAction(id))
  }
}

export default connect(null, mapDispatchToProps)(Vote)
