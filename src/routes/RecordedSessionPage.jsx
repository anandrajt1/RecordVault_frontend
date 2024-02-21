import dayjs from 'dayjs';
import React from 'react';
import { useLoaderData, Link ,redirect} from 'react-router-dom';

export async function loader({ params }) {
  try {
    const res = await fetch(`http://localhost:8080/batches/${params.batchId}/recordedsessions`,{credentials:'include'});
  const recordedSessions = await res.json();
  // console.log(recordedSessions);
  return { recordedSessions };
  } catch (error) {
    return redirect('/login')
    
  }
}

function RecordedSessionPage(props) {
  const { recordedSessions } = useLoaderData();


  return (
    <div className='px-4 py-4 w-full h-screen flex flex-col gap-6 pt-32 max-w-screen-lg mx-auto'>
     <div className='flex flex-col gap-3 md:flex-row items-center justify-between'>
     <span className='font-logo text-blue-950 font-semibold text-2xl md:text-4xl '>Recorded lives... </span>
     <Link className='md:px-6 md:py-3 px-2 py-1 text-sm md:text-lg bg-black text-yellow-500 rounded-xl hover:text-yellow-200' to={`/addSession`} >Add new session</Link>
     </div>

      <ul className='flex flex-col gap-6'>
        {/* IF RECORDED SESSION IS THERE */}
        {recordedSessions &&
          recordedSessions.map((session, index) => {
            return (
              <li key={index} className='flex flex-row gap-4 justify-start items-center border-2 rounded-xl p-6 shadow-xl w-full '>
                <div className='flex flex-col justify-center items-center rounded-xl bg-blue-500  p-4 text-white text-xl md:text-2xl'>
                  <span className=''>{dayjs(session.date).format('DD')} </span>
                  <span>{dayjs(session.date).format('MMM')}</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl md:text-3xl'>{session.title} </h3>
                  <p className='text-sm md:text-lg text-gray-600'> {session.description}</p>
                  <div className=' flex flex-row gap-2'>
                    <Link target='_blank' to={session.videoLink} className='bg-lime-600 md:px-2 px-1 py-1 text-sm rounded-xl md:font-medium cursor-pointer hover:bg-lime-500'>
                      Watch Class
                    </Link>
                    <span className='bg-orange-500 md:px-2 px-1 text-sm py-1 rounded-xl cursor-pointer'>Password</span>
                  </div>
                </div>
              </li>
            );
          })}
        {/* IF THERE IS NO RECORDED SESSION */}

         {recordedSessions.length===0 && <li className='text-xl'>Oops! No classes added in this batch ! </li>}

      </ul>
    </div>
  );
}

export default RecordedSessionPage;
