import React, { Component } from 'react'
import './Vote.css'

import Up from './Up'
import Down from './Down'
import Score from './Score'

class Vote extends Component {
  render() {
    return(
      <div className="Vote">
        <Up {...this.props} />
        <Score {...this.props} />        
        <Down {...this.props} />
      </div>
    )
  }
}

export default Vote
