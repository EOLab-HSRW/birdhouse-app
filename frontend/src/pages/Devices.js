import React, { useEffect, useState } from 'react'
import Device from '../components/Device';
import { getDevices } from '../ImageAPI';

function Devices() {

  const [devices, setDevices] = useState([])

  useEffect(() => {
      let mounted = true;
      getDevices()
      .then(devices => {
          if(mounted) {
              setDevices(devices.data)
          }
      })

      return () => mounted = false;
  })

  return (
    <div className='flex-grow'>
      <div className='grid grid-cols-5'>
        {devices && devices.map((device) => (
          <Device key={device._id} device={device}/>
        ))}
      </div>
    </div>
  )
}

export default Devices