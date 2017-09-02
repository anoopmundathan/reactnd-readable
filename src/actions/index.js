import { getAllPosts, getAllCategories } from '../utils/ReadableAPI'

export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const DELETE_POST = 'DELETE_POST'

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
})

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
)

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  getAllPosts()
      .then(posts => dispatch(getPosts(posts)))
)

