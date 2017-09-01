import { combineReducers } from 'redux'

const post = (state = { post: [] }, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        post: action.posts
      }
      break
    case 'DELETE_POST':
      const removePostList = [
        ...state.post.slice(0, action.index),
        ...state.post.slice(action.index + 1)
      ]
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

// export default post

