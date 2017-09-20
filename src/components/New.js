import React, { Component } from 'react'
import { addNewPost } from '../utils/ReadableAPI'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

import uuidv1 from 'uuid/v1'

class New extends Component {
  
  state = {
    title: '',
    category: '',
    author: '',
    body: ''
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onPostClick() {
    const { title, category, author, body } = this.state
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title,
      category,
      author,
      body
    }
    addNewPost(newPost)
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  render() {
    const { categories } = this.props
    const optionList = categories.map(category => ( 
        <option 
          key={category.name} 
          value={category.name}>{category.name}</option>
      ))

    return(
      <div>
        <div>
          Title: <input 
            type="text" 
            onChange={(e) => this.onTitleChange(e)}
            value={this.state.title}></input>
        </div>
        <div>
          Category:
          <select 
            value={this.state.category} 
            onChange={this.onCategoryChange}>
            {optionList}
          </select>
        </div>
        <div>
          Body:<textarea 
            onChange={(e) => this.onBodyChange(e)}
            value={this.state.body}
            name="comments" 
            id="" 
            cols="30" 
            rows="10"></textarea>
        </div>
        <div>
          Author:<input 
            onChange={(e) => this.onAuthorChange(e)}
            type="text" 
            value={this.state.author}></input>
        </div>
        <div>
          <input 
            type="button" 
            value="Post" 
            onClick={this.onPostClick.bind(this)}></input>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
