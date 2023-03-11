import React, { Component } from 'react'
import TiaImage from './TiaImage';

class HomeComp extends Component {
  render() {
    const homeCompElements = this.props.homeCompElements
    const {
      greeting,
      author: {firstName, lastName},
      role,
      brief,
      hire,
      connect,
      githubLink,
      linkedInLink,
      twitterLink
    } = homeCompElements
    return (
      <section>
        <div className="HomeComp">
          <TiaImage />
          <h3>{greeting}</h3>
          <h3>{firstName} {lastName}</h3>
          <h4>{role}</h4>
          <p>{brief}</p>
          <button>{hire}{/* should go to contact */}</button>
          <p>{connect} 
            <a href={githubLink}>Github </a>{/* put in logo */} 
            <a href={linkedInLink}>LinkedIn </a>  
            <a href={twitterLink}>Twitter </a> 
          </p>
        </div>
      </section>
    )
  }
}

export default HomeComp