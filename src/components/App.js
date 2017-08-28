import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Categories from './Categories'
import Posts from './Posts'
import Comments from './Comments'

import '../App.css'

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <Nav />
        <Route exact path ='/' component={Posts} />
        <Route path ='/categories' component={Categories} />
        <Route path ='/comments' component={Comments} />
      </div>
    )
  }
}

export default App
