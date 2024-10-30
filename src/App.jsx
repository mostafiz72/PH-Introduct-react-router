import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
       <div>
         <h2 className=' text-3xl font-semibold text-lime-500 text-center py-5'>Main section and main header</h2>
           <div className=' container mx-auto text-center flex gap-10 justify-center items-center font-bold text-green-400'>
              <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
            <Link to='/user'>User</Link>
            <Link to='/posts'>Post</Link>
           </div>
         <Outlet/>
         <h2 className=' text-lime-500 font-semibold text-3xl text-center py-5'>Main section and main Footer</h2>
       </div>
    </>
  )
}
