import React from 'react'
import aboutpageimage from '../images/aboutpageimage.jpg'
import { CiLogin } from "react-icons/ci";
import { BiSelection } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className='bg-gradient-to-r from-white to-slate-300 w-full h-full pt-12'>
       <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row justify-around  items-center mt-6 gap-5 px-6 py-8'>
        {/* RECRDVAULT */}
            <div className='md:w-1/2'>
                <h2 className='text-2xl my-3 text-slate-500'> <span className='font-logo md:text-4xl text-blue-950'>RecordVault</span> - Your Gateway to Seamless Learning!</h2>
                <h3 className='text-gray-800'>At RecordVault, we understand the challenges that students face in keeping up with their academic commitments. That's why we've crafted a user-friendly platform that empowers students to revisit and review their previously  conducted live classes at their own pace. We believe that learning should be flexible, and with RecordVault, students  can access recorded sessions conveniently to reinforce their understanding and grasp concepts with ease.</h3>
            
                {/* OUR MISSION */}
             <div className='flex flex-col gap-5  py-8'>
            <div><h2 className="text-3xl md:text-4xl text-slate-500">Our Mission</h2></div>
            <div>
                <h3 className='text-gray-800'>Our mission at RecordVault is to provide students with a convenient and organized way to access recorded classes from their completed live sessions. We strive to enhance the learning experience by offering a platform that prioritizes accessibility, user-friendliness, and efficiency.</h3>
            </div>
            </div>
            </div>

            <div className='md:w-1/2'>
                <img className='rounded-full' src={aboutpageimage} alt="" />
            </div>
        </div>

        {/* FEATRUES THAT EMPOWER */}
        <div className='flex flex-col  gap-5 px-6 py-8'>
            <div><h2 className="text-3xl md:text-4xl text-slate-500 ">Features that Empower</h2></div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6'>

            <div className='border-2  border-cyan-200 shadow-lg rounded-lg p-2 '>
                <div className='flex flex-row mb-2 gap-1 justify-around items-center'><h3 className='text-2xl text-slate-500'>Seamless Login Process</h3><CiLogin className='w-14 h-14'/></div>
                <p className='text-gray-800'>We've designed a straightforward login system that allows students to effortlessly access their accounts, ensuring a hassle-free experience from the moment they arrive.</p>
            </div>
            <div className='border-2  border-cyan-200 shadow-lg rounded-lg p-2 '>
            <div className='flex flex-row mb-2 gap-1 justify-around items-center'><h3 className='text-2xl text-slate-500'>Batch Selection</h3><BiSelection className='w-14 h-14' /></div>
                <p className='text-gray-800'>RecordVault caters to various educational batches, allowing students to choose their specific batch and dive into a comprehensive list of recorded sessions relevant to their curriculum</p>
            </div>
            <div className='border-2  border-cyan-200 shadow-lg rounded-lg p-2 '>
            <div className='flex flex-row mb-2 gap-1 justify-around items-center'><h3 className='text-2xl text-slate-500'> Sorted by Date, Topic, and Description</h3><BsCalendarDate className='w-14 h-14' /></div>
                <p className='text-gray-800'>Finding the right recorded session is a breeze.Whether you're looking for a specific date, topic, or class description, RecordVault ensures that you can quickly locate the content you need.</p>
            </div>
            <div className='border-2  border-cyan-200 shadow-lg rounded-lg p-2 '>
            <div className='flex flex-row mb-2 gap-1 justify-around items-center'><h3 className='text-2xl text-slate-500'>User-Friendly Interface</h3><FaUserGraduate className='w-14 h-14'/></div>
                <p className='text-gray-800'>Our platform is built with the user in mind. The clean and intuitive interface guarantees a smooth navigation experience, making it easy for students to focus on their studies rather than figuring out how to use the platform.</p>
            </div>
            </div>
        </div>
        {/* join RV */}
        <div className='flex flex-col gap-5 px-6 py-8'>
            <h2 className='text-2xl text-slate-500'>Join RecordVault Today</h2>
            <p className='text-gray-800'>RecordVault is not just a platform; it's a commitment to making education accessible and flexible. Join us in redefining the way students engage with their coursework. Empower your learning journey with RecordVault and make the most out of your educational experience.

Welcome to a world where learning knows no bounds. Welcome to RecordVault – Your recorded classes, your way!</p>
<Link to={'/signup'}><button className='text-black bg-gradient-to-r from-cyan-500 to-blue-500 my-8 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-200 font-bold'>Register</button></Link>
            </div>
       </div>
    </div>
  )
}

export default AboutPage