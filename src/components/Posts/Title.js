import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Title extends Component {

  render() {
    const { id, title, category } = this.props.post
    return(
      <div className="Title">
        <Link to={`${category}/${id}`}>{title}</Link>
      </div>
    )
  }
}

Title.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}
