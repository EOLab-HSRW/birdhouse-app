import React from 'react'
import { TbDrone } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Device({device}) {
  return (

    <div className='h-40 border border-gray/40 shadow-xl rounded-md m-2 p-4 flex flex-col justify-between '>
        <div className='flex flex-row justify-right  items-center py-1 text-gray'>
            <div>
                <TbDrone className='mx-1' size="1.2rem"/>
            </div>
            <div className='flex flex-col px-2'>
                <div className='font-bold text-base'>
                    {device.deviceName}
                </div>
                <div className='text-xs'>
                    {device.deviceSchool}
                </div>
            </div>
        </div>
        <div className='flex-grow'>
            Center
        </div>
        <div className='text-sm font-semibold text-purple-600 hover:text-purple-600 visited:text-purple-600'>
            <Link to={`/${device._id}/gallery`}>View Gallery</Link>
        </div>
    </div>
  )
}

export default Device