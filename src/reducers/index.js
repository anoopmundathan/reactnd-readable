import { combineReducers } from 'redux'

// For Individual Post
const post = (state = { post: {} }, action) => {
  switch(action.type) {
    case 'GET_POST':
      return {
        ...state, 
        post: action.post
      }
    default: 
      return state
  }
}

// For Posts
const posts = (state = { posts: [] }, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.posts
      }
    case 'DELETE_POST':
      const currentPost = [...state.posts]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        posts: [...currentPost.slice(0, indexToDelete), 
        ...currentPost.slice(indexToDelete + 1)]
      }
    case 'UP_VOTE':
      const currentPostUpVote = [...state.posts]
      const indexUp= currentPostUpVote.findIndex(post => post.id === action.id)
      currentPostUpVote[indexUp].voteScore = currentPostUpVote[indexUp].voteScore + 1
      return {
        posts: [...currentPostUpVote]
      }
    case 'DOWN_VOTE':
      const currentPostDownVote = [...state.posts]
      const indexDown= currentPostDownVote.findIndex(post => post.id === action.id)
      currentPostDownVote[indexDown].voteScore = currentPostDownVote[indexDown].voteScore - 1
      return {
        posts: [...currentPostDownVote]
      }
    case 'GET_POST_CATEGORY':
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

// For Categories
const categories = (state = { categories: [] }, action) => {
  switch(action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

// For Comments 
const comments = (state = { comments: [] }, action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
    return {
      ...state,
      comments: action.comments
    }
    default: 
      return state
  }
}

export default combineReducers({
  post,
  posts,
  categories,
  comments
})

