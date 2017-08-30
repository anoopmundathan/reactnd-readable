import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return(
    <div className="Nav">
      <NavLink activeClassName='active' exact to='/'>Posts</NavLink>
      <NavLink activeClassName='active' to='/categories'>Categories</NavLink>
      <NavLink activeClassName='active' to='/comments'>Comments</NavLink>
    </div>
  )
}

export default Nav