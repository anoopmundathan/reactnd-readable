import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Categories from './Categories'
import CategoryView from './CategoryView'

import { getAllCategories, getAllPostsForCategory } from '../utils/ReadableAPI'
import '../App.css'

class App extends Component {
  
  state = {
    categories: [],
    screen: 'list'
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
    const { categories, screen } = this.state
    return(
      <div>
        <Route exact path='/' render={() => (
          <Categories 
            categories={categories} 
            onNavigate={() => {
              this.setState({
                screen: 'view'
              })
            }}/>
        )} />
        <Route path='/view' component={CategoryView} />
      </div>
    )
  }
}

export default App
