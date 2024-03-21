//Sign up component
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const LogIn = () => {
    const navigateTo = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  
  const [authenticated, setAuthenticated] = useState(false)
  const [message, setMessage] = useState('')

  /* useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    setAuthenticated(!!authToken)
    console.log('auththokennnn new nw ewnw saved')
  }) */

  const handleFormChange = (e) => {
    const {name, value} = e.target
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = () => {
    if (loginData.email && loginData.password !== '') {
      setAuthenticated(true)
        console.log('setAuthenticated(true)')
      setMessage({message: 'log in successful'})
        console.log('login successful')
      navigateTo('/usercard')
        console.log('now in usercard')
    }
    else {
      setMessage({message: 'Please, enter login correct details'})
      console.log('user entered wrong details')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (authenticated) {
      localStorage.setItem('formData', JSON.stringify(loginData))
      setMessage({message: 'form submitted'})
        console.log('loginData now saved')
      localStorage.setItem('authToken', 'sampleAuthToken')
        console.log('authToken saved')
    }
    setLoginData({
      email: '',
      password: '',
    });
  }

  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">Login</h1>
      <form onSubmit={handleSubmit}>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="email" name="email" onChange={handleFormChange} 
          value={loginData.email} placeholder="Email" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="password" name="password" onChange={handleFormChange} 
          value={loginData.password} placeholder="Password" /><br/>
        <p className="bg-red-400 p-[8px] m-1 ml-0 rounded-[10px]">{message.message}</p> 
        <button className="bg-yellow-400 p-[8px] m-1 ml-0 rounded-[10px]"
          onClick={handleLogin} type='submit'>Sign In</button>
      </form> 
    </div>
  )
}
{/* <button className="bg-red-400 p-[8px] m-1 ml-0 rounded-[10px]"
          onClick={() => navigateTo("/usercard")} type='submit'>Sign In</button> */}
export default LogIn
