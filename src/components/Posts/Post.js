import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePostAction } from '../../actions'

import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Points } from './Points'
import Vote from './Vote'
import { Edit } from './Edit'
import { Delete } from './Delete'

class Post extends Component {
  state = {
    postClick: false
  }

  onPostClick = () => {
    this.setState({
      postClick: !this.state.postClick
    })
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const {body, title, author, voteScore, id } = this.props.post

    return(  
      <div className="Post">
        {!this.state.postClick
        ? (<div className="Title">
            <Title onPostClick={this.onPostClick} content={title} />
          </div>)
        : (<div className="Body">
            <Title onPostClick={this.onPostClick} content={body} />
          </div>)
        }

        <div className="Post-Info">
          <Author author={author} />
          <Comments />
          <Points point={voteScore}/>
          <Vote id={id}/>
          <Edit />
          <Delete 
            id={id}
            onDeleteClick={this.onDeleteClick}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id))
  }
}

export default connect(null, mapDispatchToProps)(Post)
