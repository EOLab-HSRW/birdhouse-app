import React from 'react'
import { Link } from 'react-router-dom'
import Not from '../assets/404.png'

function NoPage() {
  return (
    <div  class='flex-grow flex flex-col items-center justify-center'>
      <img src={Not} alt='Not Found'/>
      <div className='bg-white border-4  border-purple-600 rounded-xl'>
        <p className='m-1 h-16 w-32 bg-gray rounded-xl flex justify-center items-center text-lime font-semibold'>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    </div>
  )
}

export default NoPage