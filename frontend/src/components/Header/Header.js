import React from 'react'
import { DE, GB, NL } from 'country-flag-icons/react/3x2'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div class='bg-lime h-20 w-full subpixel-antialiased flex flex-row items-center p-6'>
      <div class='text-gray text-center basis-11/12'>
        <Link to="/">Some fancy Cam Viewer Name</Link>
      </div>
      <div class='basis-1/12'>
        <div class='flex flex-row justify-evenly'>
          <NL class='h-4 rounded'/>
          <GB class='h-4 rounded'/>
          <DE class='h-4 rounded'/>
        </div>
      </div>
    </div>
  )
}

export default Header