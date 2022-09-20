import React from 'react'
import { imagePreview } from '../../ImageAPI'

const Photo = ({image}) => {
  return (
    <div className='rounded-sm outline outline-gray/80 shadow-lg shadow-black flex items-center mx-1'>
        <img className='h-40 m-auto rounded-sm' src={imagePreview(image)}  alt="Not found"/>
    </div>
  )
}

export default Photo