//Sign up component
import React, { useState, /* useEffect */ } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const navigateTo = useNavigate();

  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    role: '',
    country: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')

  const handleFormChange = (e) => {
    const {name, value} = e.target
    setSignUpData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const storedData = JSON.parse(localStorage.getItem('loginData'))
    if (!signUpData.email || !signUpData.password/* <= 5 */) {
      setMessage('Please, fill the form to sign up')
      console.log('user didnt fill form')
    }
    else if (signUpData.password !== signUpData.confirmPassword) {
      setMessage('Passwords do not match')
      console.log('user typed different passwords')
    }
    else if (storedData[signUpData.email]) {
      setMessage('User exist please log in')
      console.log('existing user tried to sign up')  
    }
    else {
      /* setAuthenticated(false)
        console.log('setAuthenticated(false)') */
        localStorage.setItem('signUpData', JSON.stringify(([...storedData, signUpData])))
        localStorage.setItem('loginData', JSON.stringify(
          { email: signUpData.email, password: signUpData.password }));
        console.log('form submitted / sign up successful')
      navigateTo('/usercard')
        console.log('now in usercard')
        signUpData({
          fullName: '',
          email: '',
          role: '',
          country: '',
          password: '',
          confirmPassword: '',
        })
    }
  }

  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">Login details</h1>
      <form onSubmit={handleSignUp}>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="text" name="fullName" onChange={handleFormChange} 
          value={signUpData.fullName} placeholder="Full Name" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="email" name="email" onChange={handleFormChange} 
          value={signUpData.email} placeholder="Email" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="text" name="role" onChange={handleFormChange} 
          value={signUpData.role} placeholder="Role" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="text" name="country" onChange={handleFormChange} 
          value={signUpData.country} placeholder="Country" /*use country api and use select option */ /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="password" name="password" onChange={handleFormChange} 
          value={signUpData.password} placeholder="Password" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="password" name="confirmPassword" onChange={handleFormChange} 
          value={signUpData.confirmPassword} placeholder="Confirm Password" /><br/>
        <p className="bg-red-400 p-[8px] m-1 ml-0 rounded-[10px]">{message}</p> 
        <button className="bg-red-700 p-[8px] m-1 ml-0 rounded-[10px] text-white"
         type='submit'>Sign Up</button>
      </form> 
    </div>
  )
}

export default SignUp
