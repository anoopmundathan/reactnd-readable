import { 
  getPost,
  getAllPosts, 
  getAllCategories,
  deletePost,
  votePost,
  getAllPostsForCategory,
  getComments
} from '../utils/ReadableAPI'

export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getAllPostsCategoryAction = (category) => dispatch => (
  getAllPostsForCategory(category)
    .then((posts) => {
      dispatch({
        type: 'GET_POST_CATEGORY',
        posts
      })
    })
)

export const downVoteAction = (id) => dispatch => (
  votePost(id, "downVote")
    .then(() => {
      dispatch({
        type: 'DOWN_VOTE',
        id
      })
    })
)

export const upVoteAction = (id) => dispatch => (
  votePost(id, "upVote")
    .then(() => {
      dispatch({
        type: 'UP_VOTE',
        id
      })
    })
)

export const deletePostAction = (id) => dispatch => (
  deletePost(id)
    .then(() => {
      dispatch({
        type: 'DELETE_POST',
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

export const getPostAction = (id) => dispatch => (
  getPost(id)
    .then(post => {
      dispatch({
        type: 'GET_POST',
        post
      })
    })
)

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  getAllPosts()
      .then(posts => dispatch(getPosts(posts)))
)

export const getCommentsAction = (id) => dispatch => (
  getComments(id)
    .then(comments => {
      dispatch({
        type: 'GET_COMMENTS',
        comments
      })
    })
)
