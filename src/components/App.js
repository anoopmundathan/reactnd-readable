import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Posts from './Posts/'
import Comments from './Comments'
import SideNav from './SideNav'

import '../App.css'

class App extends Component {

  render() {
    return(
      <div className="App">
        <Header />
        <div className="Container">
          <SideNav />
          <Route exact path ='/' component={Posts} />
          <Route path ='/comments' component={Comments} />
        </div>
      </div>
    )
  }
}

export default App
