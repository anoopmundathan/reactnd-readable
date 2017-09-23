import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header/'
import Posts from './Posts/'
import PostDetail from './PostDetail'
import New from './New'
import SideNav from './SideNav'

import '../App.css'

class App extends Component {
  state = {
    hamburgerClicked: false
  }

  onHamburgerClick = () => {
    this.setState({
      hamburgerClicked: !this.state.hamburgerClicked
    })
  }

  render() {
    let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    if (this.state.hamburgerClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
    }
    return(
      <div className="App">
        <Header 
          onHamburgerClick={this.onHamburgerClick} 
          hamburgerClicked={this.state.hamburgerClicked} />
        <div className="Container">
          <SideNav 
            sideNavClass={sideNavClass}/>
          <div className="Post-Container">
            <Route exact path ='/' component={Posts} />
            <Route exact path ='/:category' component={Posts} />
            <Route exact path ='/:category/:id' component={PostDetail} />
            <Route exact path ='/new' component={New} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
