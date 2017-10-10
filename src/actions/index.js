import { 
  getPost,
  getAllPosts, 
  getAllCategories,
  deletePost,
  votePost,
  getAllPostsForCategory,
  getComments,
  addNewPost,
  editPost,
  addComment,
  deleteComment,
  editComment,
  voteComment
} from '../utils/ReadableAPI'

const GET_POSTS = 'GET_POSTS'
const GET_POST = 'GET_POST'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
const ADD_NEW_POST = 'ADD_NEW_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const REMOVE_POST = 'REMOVE_POST'
const DELETE_POSTS = 'DELETE_POSTS'
const DOWN_VOTE = 'DOWN_VOTE'
const UP_VOTE = 'UP_VOTE'
const VOTE_POST = 'VOTE_POST'
const CHANGE_SORT = 'CHANGE_SORT'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export const fetchPosts = () => dispatch => (
  getAllPosts()
    .then(posts => {
      posts.map(post => {
        getComments(post.id)
          .then(comments => {
            dispatch({
              type: GET_POSTS,
              post,
              comments
            })
          })
      })
    })
)

export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type: GET_POST,
            post,
            comments
          })
        })
    })
)

export const addNewPostAction = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch({
        type: ADD_NEW_POST,
        post
      })
    })
)

export const editPostAction = (id, post) => dispatch => (
  editPost(id, post)
    .then((post) => {
      dispatch({
        type: EDIT_POST,
        id, 
        post
      })
    })
)

export const deletePostAction = (id) => dispatch => (
  deletePost(id)
    .then(() => {
      dispatch({
        type: DELETE_POST,
        id
      })
    })
)

export const removePostAction = (id) => dispatch => {
  return deletePost(id)
    .then(() => {
      dispatch({
        type: REMOVE_POST,
        id
      })
    })
}

export const getAllPostsCategoryAction = (category) => dispatch => (
  getAllPostsForCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POST_CATEGORY,
        posts
      })
    })
)

export const downVoteAction = (id) => dispatch => (
  votePost(id, "downVote")
    .then(() => {
      dispatch({
        type: DOWN_VOTE,
        id
      })
    })
)

export const upVoteAction = (id) => dispatch => (
  votePost(id, "upVote")
    .then(() => {
      dispatch({
        type: UP_VOTE,
        id
      })
    })
)

// TODO - This is for single Post - Need to find a better way to do
export const downVotePostAction = (id) => dispatch => (
  votePost(id, "downVote")
    .then((comment) => {
      dispatch({
        type: VOTE_POST,
        voteScore: comment.voteScore
      })
    })
)

export const upVotePostAction = (id) => dispatch => (
  votePost(id, "upVote")
    .then((comment) => {
      dispatch({
        type: VOTE_POST,
        voteScore: comment.voteScore
      })
    })
)

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
)

export const deletePosts = () => ({
  type: DELETE_POSTS
})

export const changeSortAction = (value) => {
  return {
    type: CHANGE_SORT,
    value: value
  }
}

export const addCommentAction = (comment) => dispatch => {
  return addComment(comment)
    .then(comment => {
      dispatch({
        type: ADD_COMMENT,
        comment
      })
    })
}

export const deleteCommentAction = (id) => dispatch => {
  return deleteComment(id)
    .then(() => {
      dispatch({
        type: DELETE_COMMENT,
        id
      })
    })
}

export const editCommentAction = (id, comment) => dispatch => {
  return editComment(id, comment)
    .then((comment) => {
      dispatch({
        type: EDIT_COMMENT,
        id,
        comment
      })
    })
}

export const upVoteCommentAction = (id) => dispatch => (
  voteComment(id, "upVote")
    .then((comment) => {
      dispatch({
        type: UPVOTE_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore
      })
    })
)

export const downVoteCommentAction = (id) => dispatch => (
  voteComment(id, "downVote")
    .then((comment) => {
      dispatch({
        type: DOWNVOTE_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore
      })
    })
)
