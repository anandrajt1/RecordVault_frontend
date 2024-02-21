import React from 'react'
import landingPageImage from '../images/landingpagePic.webp'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div className='flex flex-col gap-6 md:flex-row justify-around items-center p-8 pt-40 bg-gradient-to-r from-white to-slate-300 h-screen'>
        {/* LANDING PAGE LEFT CONTENT */}
        <div className='flex flex-col gap-2 '>
            
            
            <h1 className='font-semibold text-3xl md:text-5xl text-blue-600'>Welcome to <span className='font-logo text-blue-950'>Record Vault Hub</span></h1>
            <span className='md:text-2xl text-xl text-gray-600'>Your Gateway to Organized Education</span>
            <Link to={'/signup'}><button className='text-black bg-gradient-to-r from-cyan-500 to-blue-500 my-8 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-200 font-bold'>Register</button></Link>

        </div>

        {/* LANDING PAGE LEFT CONTENT */}
        <div>
            <img className='rounded-full' src={landingPageImage} alt="landing page pic" />
        </div>
    </div>
    </>
  )
}

export default LandingPage