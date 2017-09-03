import { combineReducers } from 'redux'

const post = (state = { post: [] }, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        post: action.posts
      }
    case 'DELETE_POST':
      const currentPost = [...state.post]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        post: [...currentPost.slice(0, indexToDelete), 
        ...currentPost.slice(indexToDelete + 1)]
      }
    case 'UP_VOTE':
      const currentPostVote = [...state.post]
      const index= currentPostVote.findIndex(post => post.id === action.id)
      currentPostVote[index].voteScore = currentPostVote[index].voteScore + 1
      return {
        post: [...currentPostVote]
      }

    default:
      return state
  }
}

const category = (state = { category: [] }, action) => {
  switch(action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        category: action.categories
      }
    default:
      return state
  }
}

export default combineReducers({
  post,
  category
})


