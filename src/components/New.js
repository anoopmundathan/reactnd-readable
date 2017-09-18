import React, { Component } from 'react'
import { addNewPost } from '../utils/ReadableAPI'

class New extends Component {
  
  state = {
    title: '',
    category: '',
    author: '',
    body: ''
  }

  onPostClick() {
    const { title, category, author, body } = this.state
    addNewPost(title, category, author, body)
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  onCategoryChange(e) {
    this.setState({ category: e.target.value })
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  render() {
    return(
      <div>
        <div>
          Title: <input 
            type="text" 
            onChange={(e) => this.onTitleChange(e)}
            value={this.state.title}></input>
        </div>
        <div>
          Category: <input 
            type="text" 
            onChange={(e) => this.onCategoryChange(e)}
            value={this.state.category}></input>
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

export default New
