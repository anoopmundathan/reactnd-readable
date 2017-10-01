import React, { Component } from 'react'
import { connect } from 'react-redux'

class SortBy extends Component {

  render() {
    return(
      <div className="SortBy">
        <select name="sort" id="sort">
          <option value="Popular">Popular</option>
          <option value="UnPopular">UnPopular</option>
          <option value="Date">Date</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort
  }
}

export default connect(mapStateToProps, null)(SortBy)
