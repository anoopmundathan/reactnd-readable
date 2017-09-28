import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import { fetchCategories } from '../actions'
import { editPost } from '../utils/ReadableAPI'

import './NewPost/NewPost.css'

class EditPost extends Component {

  state = {
    id: '',
    title: '',
    author: '',
    body: '',
    category: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
      .then(() => {
        const { title, author, body, category, voteScore } = this.props.post.post
        this.setState({
          id,
          title,
          author,
          body,
          category
        })
      })

      this.props.getCategories()  
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  onEditClick = () => {
    const { id, title, body } = this.state
    editPost(id, {title, body})
  }

  render() {
    const { categories } = this.props.categories
    const categoryList = categories.map(category => {
      return (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      )
    })

    return(
      <div className="New-Post">
        <div className="NewPost-Title-Container">
          <div className="NewPost-Title-Text">
            <input 
              type="text" 
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title} />
          </div>
        </div>

        <div className="NewPost-Category">
          <div>
            <select 
              onChange={this.onCategoryChange}
              value={this.state.category}>
              {categoryList}
            </select>
          </div>
        </div>

        <div className="NewPost-Body">
          <div>
            <textarea 
              value={this.state.body}
              onChange={(e) => this.onBodyChange(e)}
              name="comments" 
              id="" 
              cols="30" 
              rows="8" />
          </div>
        </div>

        <div className="NewPost-Author">
          <div>
            <input 
              type="text" 
              onChange={(e) => this.onAuthorChange(e)}
              value={this.state.author} />
          </div>
        </div>

        <div className="NewPost-Button">
          <input
            className="Post-Button"
            type="button" 
            onClick={this.onEditClick}
            value="Edit" />
        </div>
    </div>
    )
  }
}

const mapStateToProps = ({ post, categories }) => {
  return {
    post,
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
