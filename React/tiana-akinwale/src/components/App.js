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
      hire: 'Hire Me',
      connect: 'Connect with me',
      githubLink: 'https://github.com/TianaAkinwale',
      linkedInLink: 'https://www.linkedin.com/in/iyanuoluwa-akinwale-1169ab1aa/',
      twitterLink: 'https://twitter.com/tianaa-akinwale'
    }
    const aboutCompElements = {
      about: 'About Me',
      about1: `Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin
       lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius
        sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut sollicitudin. Et est a nam dolores
         eget itaque sagittis et parturient duis est eleifend sociis rutrum odio viverra integer.`,
      about2: `Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin
      lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius
       sollicitudin...`,
      download: 'Download CV'  
    }
    return (
      <div>
        <NavBar 
        navBarElements={navBarElements}
        />
        <HomeComp 
        homeCompElements={homeCompElements}
        />
        <AboutComp 
        aboutCompElements={aboutCompElements}
        />
      </div>
    )
  }
}

export default App