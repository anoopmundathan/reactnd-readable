const api = process.env.REACT_APP_READABLE_API_UTL || 'http://localhost:5001'

// Get token from localStorage
let token = localStorage.token

if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
// Get all categories available
export const getAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)
}

// GET /:categories/posts
export const getAllPostsForCategory = (category) => {
  fetch(`${api}/${category}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}

// GET /posts
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}

// DELETE /posts/:id
export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  })
}

// POST /posts/:id
export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
}
