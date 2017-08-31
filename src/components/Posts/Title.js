import React, { Component } from 'react'

export class Title extends Component {

  render() {
    const { content } = this.props
    return(
      <div className="Title" onClick={this.props.onPostClick}>
        {content}
      </div>
    )
  }
}
