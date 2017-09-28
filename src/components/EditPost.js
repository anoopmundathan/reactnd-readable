import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

import './NewPost/NewPost.css'

class EditPost extends Component {

  state = {
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
        console.log(category)
        this.setState({
          title,
          author,
          body,
          category
        })
      })
  
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

  onEditClick = () => {
    /*TODO Validation*/
    /* Call API to edit the post*/
  }

  render() {
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
              value={this.state.category} >
              <option key="one" value={this.state.category}>
                {this.state.category}
              </option>
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

const mapStateToProps = ({ post }) => {
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
