import React, { Component } from 'react'
import Categories from './Categories'
import { getAllCategories, getAllPostsForCategory } from '../utils/ReadableAPI'
import '../App.css'

class App extends Component {
  
  state = {
    categories: [],
    loading: false
  }

  componentDidMount() {  
    getAllCategories()
      .then(categories => {
        const items = categories.map(item => item.name)
        this.setState({
          categories: items,
          loading: true
        })
      })
  }

  render() {
    const { categories, loading } = this.state
    return(
      <div>
        {loading 
        ? (<Categories categories={categories} />)
        : (<div>loading...</div>)
        }
      </div>
    )
  }
}

export default App
