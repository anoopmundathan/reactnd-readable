import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Posts from './Posts'
import Categories from './Categories'
import Comments from './Comments'

import { getAllCategories, getAllPostsForCategory } from '../utils/ReadableAPI'
import '../App.css'

class App extends Component {
  
  state = {
    categories: []
  }

  componentDidMount() {  
    getAllCategories()
      .then(categories => {
        const items = categories.map(item => item.name)
        this.setState({ categories: items })
      })
  }

  render() {
    const { categories } = this.state
    return(
      <div>
        <div>
          <Link to='/categories'>Categories</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/comments'>Comments</Link>
        </div>
        <Route path ='/posts' component={Posts} />
        <Route path ='/comments' component={Comments} />
        <Route path='/categories' render={() => (
          <Categories 
            categories={categories} 
            onNavigate={() => {
              this.setState({
                screen: 'view'
              })
            }}/>
        )} />
      </div>
    )
  }
}

export default App
