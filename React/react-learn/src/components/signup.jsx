//Sign up component
import React, { useState } from 'react'

const SignUp = ({ signUpElements }) => {
  const { subscribe, signUp, signupbtn } = signUpElements
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
  })

  const fNameHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      firstName: e.target.value,
    }))
  }
  const lNameHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      firstName: e.target.value,
    }))
  }
  const mailHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      firstName: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Do something with the form data
  }

  return (
    <div className='DivSignUp'>
      <h1 className="subs">{subscribe}</h1>
      <p className="subs">{signUp}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={fNameHandler}placeholder="First Name" required/>
        <input type="text" onChange={lNameHandler} placeholder="Last Name"/>
        <input type="email" onChange={mailHandler} placeholder="Email" required/><br/>
        <button id='signupbtn'>{signupbtn}</button>
      </form> 
    </div>
  )
}

export default SignUp
