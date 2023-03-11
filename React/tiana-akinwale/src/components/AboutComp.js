import React, { Component } from 'react'

class AboutComp extends Component {
  render() {
    const aboutCompElements = this.props.aboutCompElements
    const {
      heading,
      about1,
      about2,
      download
    } = aboutCompElements
    return (
      <section>
        <div className="AboutComp">
          <h2>{heading}</h2>
          <h4>{about1}</h4>
          <p>{about2}</p>
          <button>{download}</button>{/* a link to cv download */}
      </div>
      </section>
    )
  }
}

export default AboutComp