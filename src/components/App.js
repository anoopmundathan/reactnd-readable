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
          <Link to='/categories'>Categories</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/comments'>Comments</Link>
        </div>
          <Route path ='/posts' component={Posts} />
          <Route path ='/comments' component={Comments} />
          <Route path ='/categories' component={Categories} />
      </div>
    )
  }
}

export default App
