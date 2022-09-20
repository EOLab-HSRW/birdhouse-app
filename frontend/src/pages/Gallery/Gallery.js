import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Photo from '../../components/Photo/Photo'
import { getImages } from '../../ImageAPI';

function Gallery() {
    
    const [images, setImages] = useState([])
    const {id} = useParams()

    useEffect(() => {
        let mounted = true;
        getImages(id)
        .then(images => {
            if(mounted) {
                setImages(images.data)
            }
        })

        return () => mounted = false;
    }, [id])

  return (
    <div className='flex-grow'>
        Gallery
        {images && images.map((image, i) => (
        <Photo key={i} image={image.fileName}/>
        ))}
    </div>
  )
}

export default Gallery