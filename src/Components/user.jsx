import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function user() {

  const userSingleInfo = useLoaderData();
  console.log(userSingleInfo);
  
  const {name,email,username} = userSingleInfo;
  return (
    <div className='text-center'>User Page here now
      <div className=' border-2 border-lime-500'>
        <h2>{name}</h2>
        <h2>{username}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  )
}
