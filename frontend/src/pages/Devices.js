import React, { useEffect
  // , useState 
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Device from '../components/Device'
import { devicesDispatch } from '../features/helpers'

function Devices() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.device)

  useEffect(() => {
    dispatch(devicesDispatch())
  }, [dispatch])
  

  return (
    <div className='flex-grow flex flex-col'>
      <div className='flex justify-center'>
        <input className='
          my-4 mx-4 w-16 h-16 p-2 px-2 text-[31px]
          border border-gray/40 shadow-xl rounded-full outline-none
          transition duration-50'
          id='input' type='text' placeholder=' &#61442; Search Name or School...' required/>
      </div>
      <div className='grid grid-cols-5'>
        {state.data && state.data.map((device) => (
          <Device key={device._id} device={device}/>
        ))}
      </div>
    </div>
  )
}

export default Devices