import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function users() {

  const userData = useLoaderData();
  return (
    <div className=' font-semibold text-center py-5'>
    <div className=' grid grid-cols-3 gap-10 container mx-auto'>
      {userData.map(user => (
        <div className=' border-2 border-lime-400 py-5 rounded-lg' key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3 className=' mb-8'>{user.email}</h3>
          <Link to={`/user/${user.id}`} className=' bg-blue-500 px-8 py-3 rounded-lg text-white mt-5'>Details</Link>
          {/* <button className=' bg-green-500 px-8 py-3 rounded-lg text-white my-5'>Message</button> */}
        </div>
      ))}
    </div>
    </div>
  )
}
