import React from 'react'
import { TbDrone } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Device({device}) {
  return (

    <div className='h-60 border border-gray/40 shadow-xl rounded-md m-3 flex flex-col justify-between hover:scale-105 transition duration-250 ease-in-out'>
        <div className='flex flex-row justify-right  items-center py-6'>
            <div>
                <TbDrone className='mx-2 ml-6' size={22}/>
            </div>
            <div className='flex flex-col px-4'>
                <div className='font-bold text-neutral-800 text-sm'>
                    {device.deviceName}
                </div>
                <div className='text-tiny text-gray'>
                    {device.deviceSchool}
                </div>
            </div>
        </div>
        <div className='flex-grow bg-gray px-0'>
            
        </div>
        <div className='px-6 py-3'>
            <Link id='view' to={`/${device._id}/gallery`}>View Gallery</Link>
        </div>
    </div>
  )
}

export default Device