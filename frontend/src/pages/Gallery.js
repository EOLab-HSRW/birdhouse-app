import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CurrentPhoto from '../components/CurrentPhoto';
import Photo from '../components/Photo'
import { getImages } from '../ImageAPI';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'

function Gallery() {
    
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0)
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

    const handleClick = (event) => {
        const key = event.target.getAttribute("id");
        setCurrent(parseInt(key))
    }

    const handleLeft = (event) => {
        setCurrent(current-1)
    }

    const handleRight = (event) => {
        setCurrent(current+1)
    }

    let iconStyles = {  fontSize: "8rem" };

  return (
    <div className='flex-grow h-1/2 w-full flex flex-col items-center justify-evenly'>
        <div className='w-full mb-3 flex flex-row items-center justify-evenly' >
            { current > 0  ? <FiArrowLeftCircle onClick={event => handleLeft(event)} className='basis-1/5 hover:-translate-x-5 transition duration-[1s] ease-in-out hover:cursor-pointer' style={iconStyles}/> : <div className='basis-1/5'></div>}
            {images && <CurrentPhoto className='mx-48 basis-4/5' image={images[current]}/>}
            { current < images.length -1 ? <FiArrowRightCircle onClick={event => handleRight(event)} className='basis-1/5 hover:translate-x-5 transition duration-[1s] ease-in-out hover:cursor-pointer' style={iconStyles}/> : <div className='basis-1/5'></div>}
        </div>
        <div id="photos" className='flex flex-row'>
            {images && images.map((image, i) => (
                    <Photo i={i} key={i} image={image.fileName} handler={handleClick} current={current}/>
            ))}
        </div>
    </div>

  )
}

export default Gallery