import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger'
import Name from './Name'

import './Header.css'

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Hamburger-Name-Container">
          <Hamburger 
            onHamburgerClick={this.props.onHamburgerClick} />
          <Name name='Readable'/>
        </div>
      </div>
    )
  }
}

export default Header

