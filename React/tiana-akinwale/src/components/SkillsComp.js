import React, { Component } from 'react'

class SkillsComp extends Component {
  render() {
    return (
      <section>
        <div>
            <h2>{this.props.heading}</h2>
            {this.props.skillsMap}
        </div>
      </section>
    )
  }
}

export default SkillsComp