import React, { useEffect
  // , useState 
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Device from '../components/Device'
import SearchBar from '../components/SearchBar'
import { devicesDispatch } from '../features/helpers'

function Devices() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.device)

  useEffect(() => {
    dispatch(devicesDispatch())
  }, [dispatch])


  return (
    <>
    {state.loading ?
      <div className='flex-grow w-full flex flex-col items-center justify-evenly'>
          Loading...
      </div>
      :
    <div className='flex-grow flex flex-col'>
      <SearchBar />
      <div className='grid grid-cols-5 transition duration-250'>
        {state.filtered && state.filtered.map((device) => (
          <Device key={device._id} device={device}/>
        ))}
      </div>
    </div>
    }
    </>
  )
}

export default Devices