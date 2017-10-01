import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header/'
import Posts from './Posts/'
import PostDetail from './PostDetail/'
import NewPost from './NewPost/'
import EditPost from './EditPost'
import SideNav from './SideNav'
import PlusButton from './PlusButton'

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
    let postsClass = ['Post-Container']
    if (this.state.hamburgerClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
      postsClass = ['Post-Container-Show']
    }
    return(
      <div className="App">
        <Header 
          onHamburgerClick={this.onHamburgerClick} 
          hamburgerClicked={this.state.hamburgerClicked} />
        <div className="Container">
          <SideNav 
            sideNavClass={sideNavClass} />
          <div className={postsClass.join(' ')}>
            <Switch>
              <Route exact path ='/' component={Posts} />
              <Route exact path ='/new' component={NewPost} />
              <Route exact path ='/edit/:id' component={EditPost} />
              <Route exact path ='/:category' component={Posts} />
              <Route exact path ='/:category/:id' component={PostDetail} />
            </Switch>
          </div>
          <PlusButton />
        </div>
      </div>
    )
  }
}

export default App
