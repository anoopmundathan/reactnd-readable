import React from 'react'

const Down = (props) => {
  return(
    <div 
      className="Down"
      onClick={() => props.onClickDownVote(props.id)}>
    </div>
  )
}

export default Down
