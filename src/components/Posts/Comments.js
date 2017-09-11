import React, { Component } from 'react'

export class CommentsCount extends Component {
  render() {
    const { count } = this.props
    return(
      <div>
        {count}
      </div>
    )
  }
}
