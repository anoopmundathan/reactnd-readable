import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = (props) => {
	return(
		<div 
      className='Hamburger-Container'
      onClick={props.onHamburgerClick}>
			<div className='Hamburger'>
				<div className='Hamburger-Middle'>
				</div>
			</div>
		</div>
	)
}

Hamburger.PropTypes = {
	onHamburgerClick: PropTypes.func.isRequired
}

export default Hamburger
