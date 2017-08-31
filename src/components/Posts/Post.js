import React, { Component } from 'react'
import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Points } from './Points'
import { Vote } from './Vote'
import { Edit } from './Edit'
import { Delete } from './Delete'

export class Post extends Component {
  state = {
    postClick: false
  }

  onPostClick = () => {
    this.setState({
      postClick: !this.state.postClick
    })
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
          <Delete />
        </div>
      </div>
    )
  }
}
