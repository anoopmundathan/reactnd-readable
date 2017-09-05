import React from 'react'
import { Route } from 'react-router-dom'
import Categories from './Categories'

const SideNav = () => {
  return(
    <div className="Side-Nav">
      <SideNavHeader />
      <Categories />
    </div>
  )
}

const SideNavHeader = () => {
  return(
    <div>
      <input type="text" placeholder="Search categories"></input>
      <input type="button" value="Search"></input>
    </div>
  )
}

export default SideNav
