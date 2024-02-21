import React from 'react'
import axios from 'axios';
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function NavBar() {

  const navigate=useNavigate()
 
  
    const[nav,setNav]=useState(false)

    function logout(){
      axios.post('http://localhost:8080/users/logout',{},{withCredentials:true})
      .then(data=>{
        navigate('/')
      })
      .catch(error=>{
        console.log(error)
      })
    }
  
    
    return (
      <>
      
  
  
      <div className='w-full h-20 flex justify-between items-center fixed bg-navBar shadow-md text-white px-4'>
          <div>
              <Link to={'/'}><h1 className='text-3xl md:text-4xl  font-logo ml-2'>Record Vault</h1></Link>
          </div>
  
          <ul className=' hidden lg:flex'>
            <li className='px-4 cursor-pointer text-xl text-white hover:scale-105 duration-200 '><Link to={'/batches'} >Batches</Link></li>
            <li className='px-4 cursor-pointer text-xl text-white hover:scale-105 duration-200 ' ><Link to={'/about'} >About Us</Link></li>
            <li className='px-4 cursor-pointer text-xl text-white hover:scale-105 duration-200 '><Link to={'/contact'} >Contact</Link></li>
            <li className='px-4 cursor-pointer text-xl text-white hover:scale-105 duration-200 '><Link to={'/login'} >Login</Link></li>
            <li className='px-4 cursor-pointer text-xl text-white hover:scale-105 duration-200 '><button onClick={logout} >Logout</button></li>
            
             
          </ul>  
  
          <div onClick={()=>setNav(!nav)} className='cursor-pointer text-white pr-2 lg:hidden z-10'>
            {
              nav? <FaTimes size={30}/> : <FaBars size={30}/>
            }
          </div>
  
          {
            nav && (
              <ul className='flex flex-col justify-center items-center h-screen w-full bg-navBar text-white absolute top-0 left-0'>
                <li className='text-4xl cursor-pointer py-6 px-4 hover:scale-105 duration-200  '><Link to={'/batches'} onClick={()=>setNav(!nav)} >Batches</Link></li>
            <li className='text-4xl cursor-pointer py-6 px-4 hover:scale-105 duration-200  ' ><Link to={'/about'} onClick={()=>setNav(!nav)}>About Us</Link></li>
            <li className='text-4xl cursor-pointer py-6 px-4 hover:scale-105 duration-200  '><Link to={'/contact'} onClick={()=>setNav(!nav)} >Contact</Link></li>
            <li className='text-4xl cursor-pointer py-6 px-4 hover:scale-105 duration-200  '><Link to={'/login'} onClick={()=>setNav(!nav)}>Login</Link></li>
           
          
            
          </ul>
            )
          }
  
          
  
  
  
      </div>
  
     
      </>
    )
  }
  

export default NavBar