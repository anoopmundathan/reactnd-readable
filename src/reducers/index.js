import { combineReducers } from 'redux'

// For Individual Post
const post = (state = { post: {} }, action) => {
  switch(action.type) {
    case 'GET_POST':
      action.post.comments = action.comments
      return {
        ...state, 
        post: action.post
      }
    case 'REMOVE_POST': 
      return {
        ...state, 
        post: { }
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.comment]
        }
      }
    case 'DELETE_COMMENT':
      const comments = [...state.post.comments]
      const indexComment = comments.findIndex(comment => comment.id === action.id)
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...comments.slice(0, indexComment), 
          ...comments.slice(indexComment + 1)]
        }
      }
    case 'EDIT_COMMENT':
      const editComments = [...state.post.comments]
      const indexEditComment = editComments.findIndex(comment => comment.id === action.id)
      const { body, timestamp } = action.comment
      const newCommentToEdit = Object.assign({}, editComments[indexEditComment], { 
        body,
        timestamp
      })
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...editComments.slice(0, indexEditComment),
          newCommentToEdit, ...editComments.slice(indexEditComment + 1)]
        }
      }
    case 'UPVOTE_COMMENT':
      const upVoteComments = [...state.post.comments]
      const indexUpComment = upVoteComments.findIndex(comment => comment.id === action.id)
      const upScore = action.voteScore
      const newUpScore = Object.assign({}, upVoteComments[indexUpComment], { 
        voteScore: upScore 
      })
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...upVoteComments.slice(0, indexUpComment),
          newUpScore, ...upVoteComments.slice(indexUpComment + 1)]
        }
      }
    case 'DOWNVOTE_COMMENT':
      const downVoteComments = [...state.post.comments]
      const indexDownComment = downVoteComments.findIndex(comment => comment.id === action.id)
      const downScore = action.voteScore
      const newDownScore = Object.assign({}, downVoteComments[indexDownComment], { 
        voteScore: downScore 
      })
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...downVoteComments.slice(0, indexDownComment),
          newDownScore, ...downVoteComments.slice(indexDownComment + 1)]
        }
      }
      case 'VOTE_POST':
        return {
          ...state, 
          post: {
            ...state.post,
            voteScore: action.voteScore
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
      action.post.comments = action.comments
      return {
        posts: [...state.posts, action.post]
      }
    case 'ADD_NEW_POST':
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    case 'DELETE_POSTS':
      return {
        posts: []
    }
    case 'DELETE_POST':
      const currentPost = [...state.posts]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        posts: [...currentPost.slice(0, indexToDelete), 
        ...currentPost.slice(indexToDelete + 1)]
      }
    case 'EDIT_POST':
      const currentEditPost = [...state.posts]
      const indexEdit = currentEditPost.findIndex(post => post.id === action.id)
      const { title, category, body, author } = action.post
      const newPostToEdit = Object.assign({}, currentEditPost[indexEdit], {
        title,
        category,
        body,
        author
      })
      return {
        posts: [...currentEditPost.slice(0, indexEdit),
        newPostToEdit, ...currentEditPost.slice(indexEdit + 1)]
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

const sort = (state = { sort: 'popular' }, action) => {
  switch(action.type) {
    case 'CHANGE_SORT':
      const newValue = action.value
      return {
        ...state, 
        sort: newValue
      }
    default: 
      return state
  }
}

export default combineReducers({
  post,
  posts,
  categories,
  sort
})
