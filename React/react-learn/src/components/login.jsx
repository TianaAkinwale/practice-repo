//log in component
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

  const handleLogin = (e) => {
    e.preventDefault();
    const storedLoginData = JSON.parse(localStorage.getItem('loginData')) || {};
    console.log('storedLoginData:', storedLoginData)
    const users = Object.values(storedLoginData); // Convert object values to array
    console.log('users:', users)
    const user = users.find(
    (user) => user.email === loginData.email && user.password === loginData.password
  )
    if (user) {
    setAuthenticated(true);
      console.log('setAuthenticated(true)');
      console.log('form submitted / log in successful');
      navigateTo('/usercard');
      console.log('now in usercard')
        setLoginData({
          email: '',
          password: '',
        })  
    } else if (!user) {
      setMessage('User does not exist, sign up');
      console.log('non-existing user tried to sign up');
    } else {
      setMessage('Invalid email or password');
      console.log('user entered wrong details');
    }
  }

  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">Login details</h1>
      <form onSubmit={handleLogin}>   
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="email" name="email" onChange={handleFormChange} 
          value={loginData.email} placeholder="Email" /><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[270px]'
          type="password" name="password" onChange={handleFormChange} 
          value={loginData.password} placeholder="Password" /><br/>
        <p className="bg-red-400 p-[8px] m-1 ml-0 rounded-[10px]">{message}</p> 
        <button className="bg-red-700 p-[8px] m-1 ml-0 rounded-[10px] text-white"
         type='submit'>Sign In</button>
      </form> 
      <p className="bg-green-400 p-[8px] m-1 ml-0 rounded-[10px]">
        Don't have an account? <b className='cursor-pointer'
        onClick={() => navigateTo('/signup')}>Sign Up</b></p> 
    </div>
  )
}

export default LogIn
