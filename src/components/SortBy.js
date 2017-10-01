import React, { Component } from 'react'

class SortBy extends Component {
  render() {
    return(
      <div className="SortBy-Container">
        <div className="SortBy">
          <select name="sort" id="">
            <option value="Popular">Popular</option>
            <option value="UnPopular">UnPopular</option>
            <option value="Date">Date</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SortBy
