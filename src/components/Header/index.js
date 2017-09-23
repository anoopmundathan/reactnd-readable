import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger'

const Name = (props) => {
  return(
    <div className="Name-Container">
      <h1 className="Name">
        {props.name}
      </h1>
    </div>
  )
}

Name.PropTypes = {
  name: PropTypes.string.isRequired
}

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

