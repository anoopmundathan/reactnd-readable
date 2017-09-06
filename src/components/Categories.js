import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  fetchCategories,
  getAllPostsCategoryAction 
} from '../actions'


class Categories extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  onCategoryClick = (category) => {
    this.props.getAllPostsCategory(category)
  }

  render() {    
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Category
            onCategoryClick={this.onCategoryClick} 
            name={item.name}/>
        </li>
      )
    })
    
    return(
      <div className="Categories">
        <ul className="Categories-List">
          {list}
        </ul>
      </div>
    )
  }
}

const Category = (props) => {
  const category = props.name
  return(
    <div
      className="Category" 
      onClick={() => props.onCategoryClick(category)}>
      {category}
    </div>
  )
}

const mapStateToProps = ({ category }) => {
  return {
    categories: category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(fetchCategories(data)),
    getAllPostsCategory: (data) => dispatch(getAllPostsCategoryAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
