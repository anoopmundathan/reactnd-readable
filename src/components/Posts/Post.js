import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions'

import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Points } from './Points'
import { Vote } from './Vote'
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

  onDeleteClick = () => {
    console.log('Delete')
  }

  render() {
    const {body, title, author, voteScore } = this.props.post

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
          <Vote />
          <Edit />
          <Delete 
            onDeleteClick={this.onDeleteClick}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (data) => dispatch(deletePost(data))
  }
}

export default connect(null, mapDispatchToProps)(Post)
