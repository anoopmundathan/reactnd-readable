import React from 'react'

const Up = (props) => {
  return(
    <div 
      className="Up"
      onClick={() => props.onClickUpVote(props.id)}>
    </div>
  )
}

export default Up
