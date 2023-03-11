import React, { Component } from 'react'

class ContactComp extends Component {
  render() {
    const contactCompElements = this.props.contactCompElements
    const {subscribe, signUp, signupbtn} = contactCompElements
    return (
      <section>
        <div>
        <h1 className="subs">{subscribe}</h1>
        <p className="subs">{signUp}</p>
        <form>
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" placeholder="Email" required/><br/>
          <button id='signupbtn'>{signupbtn}</button>
        </form> 
      </div>
      </section>
    )
  }
}

export default ContactComp