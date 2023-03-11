import React, { Component } from 'react'

class ServicesComp extends Component {
  render() {
    const servicesCompElements = this.props.servicesCompElements
    const {
      heading,
      /* heading2, */
      services: {
        service1,
        service2,
        service3,
        service4
      },
      service1Abt,
      service2Abt,
      service3Abt,
      service4Abt
    } = servicesCompElements

    return (
      <section>
        <div class="ServicesComp">
        <h2>{heading}</h2>
        {/* <h3>{heading2}</h3> */}
        <div class="">
            {/* <imgcomp /> */}
            <h2>{service1}</h2>
            <p>{service1Abt}</p>
        </div>
        <div class="">
            {/* <imgcomp /> */}
            <h2>{service2}</h2>
            <p>{service2Abt}</p>
        </div>
        <div class="">
            {/* <imgcomp /> */}
            <h2>{service3}</h2>
            <p>{service3Abt}</p>
        </div>
        <div class="">
            {/* <imgcomp /> */}
            <h2>{service4}</h2>
            <p>{service4Abt}</p>
        </div>
      </div>
      </section>
    )
  }
}

export default ServicesComp