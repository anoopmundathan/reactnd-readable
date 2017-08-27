import { getAllPosts } from '../utils/ReadableAPI'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  getAllPosts()
      .then(posts => dispatch(getPosts(posts)))
)

