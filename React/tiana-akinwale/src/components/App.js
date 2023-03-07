import React, { Component } from 'react'
import HomeComp from './HomeComp'
import AboutComp from './AboutComp'
import NavBar from './NavBar'

class App extends Component {
  render() {
    const navBarElements = {
      openSB: 'Open SideBar',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact'
    }
    const homeCompElements = {
      hello: "Hello I'm",
      author: {
        firstName: 'IYANUOLUWA',
        lastName: 'AKINWALE'
      },
      role: 'Web Developer',
      brief: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam`,
      hire: 'Hire Me'
    }
    return (
      <div>
        <NavBar 
        navBarElements={navBarElements}
        />
        <HomeComp 
        homeCompElements={homeCompElements}
        />
        <AboutComp />
      </div>
    )
  }
}

export default App