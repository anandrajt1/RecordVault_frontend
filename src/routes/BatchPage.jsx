import React from 'react'
import { useLoaderData,Link, redirect } from 'react-router-dom';


export async function loader() {
 try {
  const res = await fetch('http://localhost:8080/batches',{credentials:'include'});
  const batches=await res.json()
  
  return { batches };
  
 } catch (error) {
  return redirect('/login')
  
 }
}

function BatchPage() {

  const { batches } = useLoaderData();
  console.log(batches)
  
  return (
    <div className='px-4 py-4 w-full h-screen flex flex-col gap-6 pt-32 max-w-screen-lg mx-auto'>
        <span className='font-logo text-blue-950 font-semibold text-2xl md:text-4xl  '>Select your batch... ! </span>

        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 p-4'>
          {
            batches.map((batch,index)=>{
              return(
                <Link to={'/batches/'+batch._id} key={index} className='hover:scale-105 cursor-pointer duration-200 shadow-cyan-500 shadow-md  w-40 h-40 bg-gradient-to-r from-cyan-800 to-cyan-600 text-xl md:text-2xl text-white rounded-lg flex flex-row justify-center items-center'>{batch.name}</Link>

              )
            })
          }
            
        </div>
    </div>
  )
}

export default BatchPage