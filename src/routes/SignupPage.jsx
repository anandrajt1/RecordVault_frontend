import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignupPage() {
  const navigate=useNavigate()

  const nameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()

  function handleSignup(e){
    e.preventDefault()
    const nameField=nameRef.current
    const name=nameField.value 

    const email=emailRef.current.value
    const password=passwordRef.current.value

    const payload={
      name:name,
      email:email,
      password:password
    }

    axios.post('http://localhost:8080/users/signup',payload)
    .then(data=>{
      // console.log(data)
      alert("SignUp Succesfull..Now Login to your Account!")
      navigate('/login')
    })
    .catch(error=>{console.log(error)})
  }


  return (
    <div className="bg-gradient-to-l to-white from-slate-300 px-4 w-full h-screen pt-32 flex flex-col ">
       
        <div className='flex flex-col  justify-center items-center gap-4 p-6 mx-auto shadow-lg  '>
        <span className='font-logo text-blue-950 font-semibold text-2xl md:text-4xl  '>Seamless access, organized learning </span>
        <span className='text-gray-600  text-xl md:text-3xl'>Create an account</span>
        <span className='text-gray-600  text-sm md:text-xl'>It's so easy & simple !</span>

        <form onSubmit={handleSignup} className='w-full mx-auto '>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-xl  font-medium text-gray-600">
            Full Name
          </label>
          <input
          ref={nameRef}
            type="text"
            id="fullName"
            name="fullName"
           placeholder='Enter your full name'
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-medium text-gray-600">
            Email Address
          </label>
          <input
          ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email address'
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-xl font-medium text-gray-600">
            Password
          </label>
          <input
          ref={passwordRef}
            type="password"
            id="password"
            name="password"
            placeholder='Enter a strong password'
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
        </div>
       


    </div>
  )
}

export default SignupPage