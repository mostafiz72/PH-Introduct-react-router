import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <div className=' h-screen w-screen bg-slate-600 flex flex-col justify-center items-center'>
        <h1 className=' text-5xl text-white font-semibold'>Error 404</h1>
        <p className=' text-xl text-white mt-5'>The page you're looking for doesn't exist.</p>
        <Link to='/' className='mt-8 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
          Go back to home
        </Link>
      </div>
    </>
  )
}
