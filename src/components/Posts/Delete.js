import React from 'react'

export const Delete = (props) => {
  return(
    <div
      onClick={() => props.onDeleteClick(props.id)} 
      className="Delete">
      Delete
    </div>
  )
}
