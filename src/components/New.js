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
    body: '',
    notValid: false,
    success: false
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onPostClick() {
    const { title, category, author, body } = this.state
    
    if (title && category && author && body) {
      const newPost = {
        id: uuidv1(),
        timestamp: Date.now(),
        title,
        category,
        author,
        body
      } 
      addNewPost(newPost)
        .then(() => this.setState({
          success: true,
          title: '',
          category: '',
          author: '',
          body: '',
          notValid: false 
        }))

    } else {
      this.setState({
        notValid: true,
        success: false
      })
    }
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
      <div className="New-Post">

        <div>
          {this.state.success && (
            <h3>New Post added...</h3> 
          )}
        </div>
        <div>
          {this.state.notValid && (
            <h3>Please enter all values...</h3> 
          )}
        </div>
        <div className="NewPost-Title-Container">
          <div className="NewPost-Title">
            <span>Title:</span>
          </div>
          <div className="NewPost-Title-Text">
            <input 
              type="text" 
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title} />
          </div>
        </div>

        <div className="NewPost-Category">
          <div>
            <span>Category:</span>
          </div>
          <div>
            <select 
              value={this.state.category} 
              onChange={this.onCategoryChange}>
              {optionList}
            </select>
          </div>
        </div>

        <div className="NewPost-Body">
          <div>
            <span>Body:</span>
          </div>
          <div>
            <textarea 
              onChange={(e) => this.onBodyChange(e)}
              value={this.state.body}
              name="comments" 
              id="" 
              cols="30" 
              rows="10" />
          </div>
        </div>

        <div className="NewPost-Author">
          <div>
            Author:
          </div>
          <div>
            <input 
              onChange={(e) => this.onAuthorChange(e)}
              type="text" 
              value={this.state.author} />
          </div>
        </div>

        <div className="NewPost-Button">
          <input 
            type="button" 
            value="Post" 
            onClick={this.onPostClick.bind(this)} />
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
