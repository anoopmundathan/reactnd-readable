import React, { Component } from 'react'

export class Count extends Component {
  render() {
    const { count } = this.props
    return(
      <div className="Total-Comments">
      Comments: {count}
      </div>
    )
  }
}
