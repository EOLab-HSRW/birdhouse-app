import React from 'react'
import { imagePreview } from '../../ImageAPI'

const Photo = ({image}) => {
  return (
    <div>
        <img src={imagePreview(image)} width='100' height='100' alt="Not found"/>
    </div>
  )
}

export default Photo