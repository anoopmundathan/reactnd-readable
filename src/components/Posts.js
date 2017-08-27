import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
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

const mapStateToProps = (state) => {
  return {
    posts: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
