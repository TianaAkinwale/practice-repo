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
      lastName: e.target.value,
    }))
  }
  const mailHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      mail: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      firstName: '',
      lastName: '',
      mail: '',
    });
    // Do something with the form data
  }

  return (
    <div className='bg-blue-700 text-center- m-[26px] pt-6px] pb-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">{subscribe}</h1>
      <p className=" ">{signUp}</p>
      <form onSubmit={handleSubmit}>
        <input className='bg-blue-700 border-none rounded-[8px] px-[9px] py-0 m-[3px] mt-[30px] w-[140px]'
          type="text" id="fName" onChange={fNameHandler} placeholder="First Name" /* required *//>
        <input className='bg-blue-700 border-none rounded-[8px] px-[9px] py-0 m-[3px] mt-[30px] w-[140px]'
          type="text" id="lName" onChange={lNameHandler} placeholder="Last Name"/>
        <input className='bg-blue-700 border-none rounded-[8px] px-[9px] py-0 m-[3px] mt-[30px] w-[140px]'
          type="email" id="mail" onChange={mailHandler} placeholder="Email" /* required *//><br/>
        <button id='signupbtn'>{signupbtn}</button>
      </form> 
    </div>
  )
}

export default SignUp
