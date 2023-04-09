//Sign up component
import React, { Component } from 'react'

class SignUp extends Component {
    render() {
    const signUpElements = this.props.signUpElements
    const {subscribe, signUp, signupbtn} = signUpElements
    
    return (
      <div className='DivSignUp'>
        <h1 className="subs">{subscribe}</h1>
        <p className="subs">{signUp}</p>
        <form>
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name"/>
          <input type="email" placeholder="Email" required/><br/>
          <button id='signupbtn'>{signupbtn}</button>
        </form> 
      </div>
    )
  }
    }
  
  export default SignUp