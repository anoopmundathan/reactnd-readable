import React, { Component } from 'react'
import { getAllPosts } from '../utils/ReadableAPI'

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    getAllPosts()
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }

  render() {
    const { posts } = this.state
    const postList = posts.map(post => (<li><Post post={post} /></li>))
    return(
      <div>
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
}

const Post = (props) => {
  const { title, author, voteScore} = props.post
  return(
    <div className="Post">
      <Title title={title} />
      <Author author={author} />
      <Comments />
      <Points point={voteScore}/>
      <Vote />
      <Edit />
      <Delete />
    </div>
  )
}
const Title = (props) => <div>{props.title}</div>
const Author = (props) => <div>{props.author}</div>
const Comments = () => <div>Comments</div>
const Points = (props) => <div>{props.point}</div>
const Vote = () => <div>Vote</div>
const Edit = () => <div>Edit</div>
const Delete = () => <div>Delete</div>


export default Posts
