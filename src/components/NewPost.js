import React from 'react'
import { Link } from 'react-router-dom'

const NewPost = () => {
  return(
    <div className="NewPost">
      <Link to="/new"><p> + New Post</p></Link>
    </div>
  )
}

export default NewPost
