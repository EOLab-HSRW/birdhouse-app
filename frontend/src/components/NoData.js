import React from 'react'
import { TbPhotoOff } from 'react-icons/tb'

function NoData({text}) {
  return (
    <div className='flex-grow w-full flex flex-row items-center justify-evenly'>
        <p className='flex flex-row  font-semibold items-center'>
            <TbPhotoOff className='mx-2 ml-6' size={26}/>
            {text}
        </p>
    </div>
  )
}

export default NoData