import React from 'react'
import { imagePreview } from '../ImageAPI'

function CurrentPhoto({image}) {
  return (
    <>
      { image && 
        <img className='rounded-sm outline outline-gray/80 shadow-lg shadow-black object-contain' 
             src={imagePreview(image.fileName)} 
             alt="Not found"/>
      }
    </>
  )
}

export default CurrentPhoto