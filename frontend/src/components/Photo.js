import React from 'react'
import { imagePreview } from '../ImageAPI'

const Photo = ({image, i, current, handler}) => {
  const outline = i === current ? 'outline-purple-600/80' : 'outline-gray/80'
  return (
    <>
        <img className={`h-40 rounded-sm outline ${outline} shadow-lg shadow-black flex items-center mx-1 hover:cursor-pointer`} 
             onClick={event => handler(event)} 
             id={i} 
             src={imagePreview(image)} 
             alt="Not found"/>
    </>
  )
}

export default Photo