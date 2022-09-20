import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CurrentPhoto from '../../components/CurrentPhoto/CurrentPhoto';
import Photo from '../../components/Photo/Photo'
import { getImages } from '../../ImageAPI';

function Gallery() {
    
    // const width = window.innerWidth

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
    <div className='flex-grow flex flex-col items-center justify-evenly'>
        <div className='h-1/2 mb-3'>
            {images && <CurrentPhoto image={images[0]}/>}
        </div>
        <div className='flex flex-row h-40 justify-evenly'>
            {images && images.map((image, i) => (
                <Photo key={i} image={image.fileName}/>
            ))}
        </div>
    </div>

  )
}

export default Gallery