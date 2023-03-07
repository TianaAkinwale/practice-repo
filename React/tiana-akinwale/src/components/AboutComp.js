import React, { Component } from 'react'

class AboutComp extends Component {
  render() {
    const aboutCompElements = this.props.aboutCompElements
    const {
      about,
      about1,
      about2,
      download
    } = aboutCompElements
    return (
      <section>
        <div className="AboutComp">
          <h2>{about}</h2>
          <h4>{about1}</h4>
          <p>{about2}</p>
          <button>{download}</button>
      </div>
      </section>
    )
  }
}

export default AboutComp