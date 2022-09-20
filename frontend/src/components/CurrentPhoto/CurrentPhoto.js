import React from 'react'
import { imagePreview } from '../../ImageAPI'

function CurrentPhoto({image}) {
  return (
    <div className='rounded-sm outline outline-gray/80 shadow-lg shadow-black'>
      { image && <img className='h-1/2 m-auto rounded-sm' src={imagePreview(image.fileName)} alt="Not found"/>}
    </div>
  )
}

export default CurrentPhoto