import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Hamburger = (props) => {
	return(
		<div 
      className='Hamburger-Container'
      onClick={props.onHamburgerClick}>
			<div className='Hamburger'>
				<div className={props.top.join(' ')}>
				</div>
				<div className={props.middle.join(' ')}>
				</div>
				<div className={props.bottom.join(' ')}>
				</div>
			</div>
		</div>
	);
}

Hamburger.PropTypes = {
	onHamburgerClick: PropTypes.func.isRequired
}

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
  
  state = {
    hamburgerClicked: false
  }

  onHamburgerClick = () => {
    this.setState({
      hamburgerClicked: !this.state.hamburgerClicked
    })
  }

  render() {
    const hamBurgerTopClass = ['Hamburger-Top'];
		const hamBurgerMiddleClass = ['Hamburger-Middle'];
		const hamBurgerBottomClass = ['Hamburger-Bottom'];
	
		if (this.state.hamburgerClicked) {
			hamBurgerTopClass.push('Hamburger-Top-Active');
			hamBurgerMiddleClass.push('Hamburger-Middle-Active');
			hamBurgerBottomClass.push('Hamburger-Bottom-Active');
    }
    
    return(
      <div className="Header">
        <div className="Hamburger-Name-Container">
          <Hamburger 
            onHamburgerClick={this.onHamburgerClick} 
            top={hamBurgerTopClass}
						middle={hamBurgerMiddleClass}
						bottom={hamBurgerBottomClass} />
          <Name name='Readable'/>
        </div>
      </div>
    )
  }
}

export default Header

