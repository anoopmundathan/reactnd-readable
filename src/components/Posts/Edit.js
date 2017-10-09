import React from 'react'
import { Link } from 'react-router-dom'

export const Edit = (props) => {
  return(
    <div className="Edit">
      <Link to={`/edit/${props.id}`}>Edit</Link>
    </div>
  )
}
