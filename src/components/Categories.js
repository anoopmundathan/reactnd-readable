import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {

  render() {
    
    const { categories } = this.props
    const list = categories.map((item, index) => 
      (<a href={item}><li key={index}>{item}</li></a>))

    return(
      <div>
        <Link
          to="/view">View</Link>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Categories
