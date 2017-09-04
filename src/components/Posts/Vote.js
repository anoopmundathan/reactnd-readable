import React, { Component } from 'react'

export class Vote extends Component {

  render() {
    return(
      <div className="Vote">
        <Up {...this.props} />
        <Down />
      </div>
    )
  }
}

const Up = (props) => {
  return(
    <div 
      className="Up"
      onClick={() => props.onClickUpVote(props.id)}>
    </div>
  )
}

const Down = (props) => {
  return(
    <div 
      className="Down">
    </div>
  )
}
