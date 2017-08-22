import React, { Component } from 'react'
import { getAllCategories, getAllPostsForCategory } from '../utils/ReadableAPI'
import '../App.css'

const categories = ['react', 'redux', 'udacity']

class App extends Component {
  
  componentDidMount() {
    getAllCategories();
    getAllPostsForCategory('udacity');
  }

  render() {
    return(
      <div>
        <ul>
          {categories.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
