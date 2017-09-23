import React from 'react'
import Categories from './Categories'

const SideNav = (props) => {
  return(
    <div className={props.sideNavClass}>
      <Categories />
    </div>
  )
}

export default SideNav
