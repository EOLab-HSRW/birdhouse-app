import React from 'react'
import { DE, GB, NL } from 'country-flag-icons/react/3x2'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-lime h-20 w-full subpixel-antialiased flex flex-row items-center p-6 mb-2'>
      <div className='text-gray text-center text-xl basis-11/12'>
        <Link to="/">Some fancy Cam Viewer Name</Link>
      </div>
      <div className='basis-1/12'>
        <div className='flex flex-row gap-1.5'>
          <NL className='h-4 rounded'/>
          <GB className='h-4 rounded'/>
          <DE className='h-4 rounded'/>
        </div>
      </div>
    </div>
  )
}

export default Header