import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate=useNavigate()


  const emailRef=useRef()
    const passwordRef=useRef()

    function handlelogin(event){
        event.preventDefault()
        
        

        const email=emailRef.current.value
        
        const password=passwordRef.current.value

        const payload={
          
          email:email,
          password:password
        }

        axios.post('http://localhost:8080/users/login',payload,{withCredentials:true})
        .then(data=>{
          // console.log(data)
               navigate('/batches')     
        })
        .catch(error=>{
          alert("Invalid user!")
          console.log(error)
        })
      }
  return (
    <div className="bg-gradient-to-l to-white from-slate-300 px-4 w-full h-screen pt-32 flex flex-col ">
       
    <div className='flex flex-col  justify-center items-center gap-6 p-6 mx-auto shadow-lg  '>
    <span className='font-logo text-blue-950 font-semibold text-2xl md:text-4xl  '>Welcome Back ! </span>
    <span className='text-gray-600  text-xl md:text-2xl'>Login your account</span>

    <form onSubmit={handlelogin} className='w-full mx-auto '>
   
    
    <div className="mb-4">
      <label htmlFor="email" className="block text-xl font-medium text-gray-600">
        Email Address
      </label>
      <input
      ref={emailRef}
        type="email"
        id="email"
        name="email"
       
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
       
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>
    
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Login
    </button>
  </form>
    </div>
   


</div>
  )
}

export default LoginPage