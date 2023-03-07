import React, { Component } from 'react'
import TiaImage from './TiaImage';

class HomeComp extends Component {
  render() {
    const homeCompElements = this.props.homeCompElements
    const {
      hello,
      author: {firstName, lastName},
      role,
      brief,
      hire
    } = homeCompElements
    return (
      <div className="HomeComp">
        <TiaImage />
        <h3>{hello}</h3>
        <h3>{firstName} {lastName}</h3>
        <h4>{role}</h4>
        <p>{brief}</p>
        <button>{hire}</button>
      </div>
    )
  }
}

export default HomeComp