import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div className="nav">
      <Link to='/'>Posts</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/comments'>Comments</Link>
    </div>
  )
}

export default Nav
