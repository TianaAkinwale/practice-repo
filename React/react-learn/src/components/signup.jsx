//Sign up component
import React, { useState, /* useEffect */ } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    country: '',
    other: '',
  })
  const [message, setMessage] = useState('Please, log in to use form')

  const handleFormChange = (e) => {
    const {name, value} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('formData', JSON.stringify(formData))
    setMessage({message: 'form updated'})
   /*  else {
      setMessage({message: 'Please log in to submit form'})
    } */
    setFormData({
      fullName: '',
      email: '',
      role: '',
      country: '',
      other: '',
    });
  }
 
  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <h1 className=" ">Sign Up</h1>
      <p className=" ">Sign up with your email address to receive news and updates</p>
      <form onSubmit={handleSubmit}>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="text" name="fullName" onChange={handleFormChange} value={formData.firstName} placeholder="First Name" /* required *//>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="email" name="email" onChange={handleFormChange} value={formData.mail} placeholder="Email" /* required *//>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="password" name="password" onChange={handleFormChange} value={formData.password} placeholder="Password" /* required *//><br/>
        <p>{message.message}</p>
        <button className='bg-red-700 rounded-[13px] py-[8px] px-[85px] m-[16px] text-white cursor-pointer' type='submit'>
        Subscribe</button>
      </form> 
    </div>
  )
}

export default SignUp
