import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    console.log(this.props)
    const postList = posts.map(post => (<li><Post post={post} /></li>))
    return(
      <div className="Posts">
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
      <div className="Title">
        <Title title={title} />
      </div>
      <div className="Post-Info">
        <Author author={author} />
        <Comments />
        <Points point={voteScore}/>
        <Vote />
        <Edit />
        <Delete />
      </div>
    </div>
  )
}
const Title = (props) => <div className="Title">{props.title}</div>
const Author = (props) => <div className="Author">{props.author}</div>
const Comments = () => <div className="Comments">comments</div>
const Points = (props) => <div className="Points">{props.point}</div>
const Vote = () => <div className="Vote">vote</div>
const Edit = () => <div className="Edit">edit</div>
const Delete = () => <div className="Delete">delete</div>

const mapStateToProps = ({ post }) => {
  return {
    posts: post.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
