import React from 'react'
import Vote from '../Vote'

export const PostInfo = (props) => {
  const { id, author, body, category, title, voteScore, timestamp } = props.post
  return(
    <div className="Post-Info">
      <div className="Post-Info-Vote">
        <Vote 
          id={id}
          score={voteScore} />
      </div>
      <div className="Post-Info-Container">
        <div className="Post-Info-Title">
          <h3>{title}</h3>
        </div>
        <div className="Post-Info-Time-Author">
          <span><b>Posted on</b> {timestamp} by <b>{author}</b></span>
        </div>
        <div className="Post-Info-Body">
          <p>{body}</p>
        </div>
        <div className="Post-Info-Category">
          <span><b>Category: </b>{category}</span>
        </div>
      </div>
    </div>
  )
}
