import React, { Component } from 'react'

class Categories extends Component {
  render() {
    const { categories } = this.props
    const list = categories.map((item, index) => 
      (<a href='#'><li key={index}>{item}</li></a>)
    )
    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Categories
