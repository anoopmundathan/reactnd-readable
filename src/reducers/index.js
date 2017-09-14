import { combineReducers } from 'redux'

// For Individual Post
const post = (state = { post: {} }, action) => {
  switch(action.type) {
    case 'GET_POST':
      return {
        ...state, 
        post: action.post
      }
    case 'GET_POST_COMMENTS':
      // return Object.assign(
      //   {}, 
      //   state, 
      //   {
      //     comments: action.comments
      //   }
      // )
      return {
        ...state,
        post: {
          ...state.post,
          comments: action.comments
        }
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
    case 'GET_COMMENTS':
      const currentPostComments = [...state.posts]
      const indexComments= currentPostComments.findIndex(post => post.id === action.id)
      currentPostComments[indexComments].comments = action.comments
      return {
        posts: [...currentPostComments]
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

export default combineReducers({
  post,
  posts,
  categories
})
