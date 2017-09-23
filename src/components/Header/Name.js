import React from 'react'
import PropTypes from 'prop-types'

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

export default Name
