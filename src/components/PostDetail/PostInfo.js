import React from 'react'

export const PostInfo = (props) => {
  const { author, body, category, title, voteScore, timestamp } = props.post
  return(
    <div className="PostInfo">
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Posted on {timestamp} by {author}</p>
      <p>{category}</p>
      <p>{voteScore}</p>
    </div>
  )
}
