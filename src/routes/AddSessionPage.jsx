import React, { useRef } from 'react'
import { object,string, number, date } from 'yup'


function AddSessionPage() {
    const formRef=useRef()

    const sessionSchema=object({
      name: string().required(),
      description:string().required(),
      date: date().default(() => new Date()).max(new Date()),
      week: number().required().positive().integer(),
      classNumber: number().required().positive().integer(),
      videoLink:string().url().required(),
      password:string()
  
    })
  
    
  
  
     async function handleSubmit(e){
          e.preventDefault()
  
          const form=formRef.current
          const name=form['name'].value
          const description=form['description'].value
          const date=form['date'].value
          const week=form['week'].value
          const classNumber=form['class'].value
          const videoLink=form['videoLink'].value
          const password=form['password'].value
  
  
          const data={
            name:name,
            description:description,
            date:date,
            week:week,
            class:classNumber,
            videoLink:videoLink,
            password:password
          }
  
          try {
            const recordedSession = await sessionSchema.validate(data);
          console.log(recordedSession)
            
          } catch (error) {
            console.log(error)
            
          }
  
          
      }

      
     
  
    return (
     
            <div className="bg-gradient-to-l to-white from-slate-300 px-4 w-full h-screen pt-32 flex flex-col ">
              <div className='flex flex-col  justify-center items-center gap-4 p-6 mx-auto shadow-lg  '>
              <h1 className='font-logo text-blue-950 font-semibold text-2xl md:text-4xl  '>Add a new session</h1>
  
  <form ref={formRef} className='w-full mx-auto ' onSubmit={handleSubmit}>
      <label className="block text-xl  font-medium text-gray-600" htmlFor="name">Topic Name:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" id='name' type="text" />

      <label className="block text-xl  font-medium text-gray-600" htmlFor="description">Description:</label>
      <textarea className="mt-1 p-2 w-full border rounded-md mb-2" id="description" ></textarea>

      <label className="block text-xl  font-medium text-gray-600" htmlFor="date">Date:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" type="date" id="date" name="date"/> 

      <label className="block text-xl  font-medium text-gray-600" htmlFor="week">Week:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" id='week' type="number" />

      <label className="block text-xl  font-medium text-gray-600" htmlFor="class">Class:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" id='class' type="number" />

      <label className="block text-xl  font-medium text-gray-600" htmlFor="videoLink">Video Link:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" id='videoLink' type="text" />

      <label className="block text-xl  font-medium text-gray-600" htmlFor="password">Password:</label>
      <input className="mt-1 p-2 w-full border rounded-md mb-2" id='password' type="text" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type='submit'>Add Recorded Session</button>
  </form>
              </div>
            </div>
          
    )
}

export default AddSessionPage