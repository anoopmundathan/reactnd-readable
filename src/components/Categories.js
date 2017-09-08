import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  render() {    
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    })
    
    return(
      <div className="Categories">
        <ul className="Categories-List">
          <All />
          {list}
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ category }) => {
  return {
    categories: category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(fetchCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
