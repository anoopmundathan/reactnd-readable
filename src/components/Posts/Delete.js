import React from 'react'

export const Delete = (props) => {
  return(
    <div
      onClick={props.onDeleteClick} 
      className="Delete">
      Delete
    </div>
  )
}
