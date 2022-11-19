import React from 'react'
import { SyncLoader } from 'react-spinners'

function Loader() {
  return (
    <div className='flex-grow w-full flex flex-col items-center justify-evenly'>
        <SyncLoader color='#9333EA' size={25} />
    </div>
  )
}

export default Loader