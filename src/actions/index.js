import { 
  getPost,
  getAllPosts, 
  getAllCategories,
  deletePost,
  votePost,
  getAllPostsForCategory,
  getComments,
  addNewPost,
  editPost
} from '../utils/ReadableAPI'

const GET_POSTS = 'GET_POSTS'
const GET_POST = 'GET_POST'
const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_NEW_POST = 'ADD_NEW_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const DELETE_POSTS = 'DELETE_POSTS'
const DOWN_VOTE = 'DOWN_VOTE'
const UP_VOTE = 'UP_VOTE'

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

export const addNewPostAction = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch({
        type: ADD_NEW_POST,
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

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
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

export const deletePosts = () => ({
  type: DELETE_POSTS
})
