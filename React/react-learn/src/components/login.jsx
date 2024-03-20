//Sign up component
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const LogIn = () => {
    const navigateTo = useNavigate();

  const [loginData, setLoginData] = useState({
    mail: '',
    password: '',
  })
  
  const [authenticated, setAuthenticated] = useState(false)
  const [message, setMessage] = useState('Please, log in to use form')

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    setAuthenticated(!!authToken)
  })

  const handleFormChange = (e) => {
    const {name, value} = e.target
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (authenticated) {
      localStorage.setItem('formData', JSON.stringify(formData))
      setMessage({message: 'form submitted'})
    }
    else {
      setMessage({message: 'Please log in to submit form'})
    }
    setLoginData({
      mail: '',
      password: '',
    });
  }

  const handleLogin = () => {
    
    localStorage.setItem('authToken', 'sampleAuthToken')
    setAuthenticated(true)
    setMessage({message: 'log in successful'})
    navigateTo('usercard/')
  }

  /* const handleLogout = () => {
    localStorage.removeItem('authToken')
    setAuthenticated(false)
    setMessage({message: 'log out successful'})
  } */

  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">Login</h1>
      <form onSubmit={handleSubmit}>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="email" name="email" onChange={handleFormChange} 
          value={loginData.password} placeholder="Email" required/><br/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="password" name="password" onChange={handleFormChange} 
          value={loginData.password} placeholder="Password" /* required *//><br/>
        <p>{message.message}</p>  
        <button className='bg-red-700 rounded-[13px] py-[8px] px-[85px] m-[16px] text-white cursor-pointer' type='submit'>
          Log In</button>
      </form> 

      {!authenticated ? (
        <button className="bg-yellow-400 p-[8px] m-1 ml-0 rounded-[10px]"
          onClick={() => navigateTo("/")}>Log In</button>
      ) : (
        <button className="bg-yellow-400 p-[8px] m-1 ml-0 rounded-[10px]"
          onClick={handleLogout}>Log out</button>
      )}
    </div>
  )
}

export default LogIn
