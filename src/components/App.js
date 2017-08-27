import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Categories from './Categories'
import Posts from './Posts'
import Comments from './Comments'

import '../App.css'

class App extends Component {

  render() {
    return(
      <div>
        <div>
          <Link to='/'>Posts</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/comments'>Comments</Link>
        </div>
          <Route exact path ='/' component={Posts} />
          <Route path ='/categories' component={Categories} />
          <Route path ='/comments' component={Comments} />
      </div>
    )
  }
}

export default App
