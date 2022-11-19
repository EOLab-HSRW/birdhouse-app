import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Device from '../components/Device'
import Loader from '../components/Loader'
import NoData from '../components/NoData'
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
    <Loader />
    : state.filtered.length > 0 ?
    <div className='flex-grow flex flex-col'>
      <SearchBar />
      <div className='grid grid-cols-5 transition duration-250'>
        {state.filtered && state.filtered.map((device) => (
          <Device key={device._id} device={device}/>
        ))}
      </div>
    </div>
    :
    <NoData text='No Devices Connected to the Database yet!'/>
    }
    </>
  )
}

export default Devices