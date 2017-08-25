import React, { Component } from 'react'

class Categories extends Component {

  render() {    
    const { categories } = this.props
    const list = categories.map((item, index) => <li key={index}>{item}</li>)
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
