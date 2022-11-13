import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CurrentPhoto from '../components/CurrentPhoto';
import Photo from '../components/Photo'
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { imagesDispatch } from '../features/helpers';
import { DateTime } from 'luxon'
import Timeline from '../components/Timeline';

function Gallery() {
    
    const [current, setCurrent] = useState(0)
    const {id} = useParams()

    const dispatch = useDispatch()
    const state = useSelector(state => state.image)

    useEffect(() => {
        dispatch(imagesDispatch(id))
    }, [dispatch, id])

    const handlePress = useCallback(event => {
        const { key } = event
        if (key === 'ArrowLeft' && current > 0) {
            setCurrent(current-1)
        } 
        else if (key === 'ArrowRight' && current < state.data.length -1) {
            setCurrent(current+1)
        }
    },[current, state.data.length])

    useEffect(() => {
        window.addEventListener('keydown', handlePress)
        return ()=> {
            window.removeEventListener('keydown', handlePress)
        }
    }, [handlePress])
    

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

    const dates = state.data.map(event => (DateTime
            .fromISO(event.createdAt)
            .toFormat('yyyy-MM-dd hh:mm:ss'))
        )

    return (
        <>
        {state.loading ?
        <div className='flex-grow w-full flex flex-col items-center justify-evenly'>
            Loading...
        </div>

        :
        <div className='flex-grow w-full flex flex-col items-center justify-evenly'>
            <Timeline data={dates} current={current}/>
            <div className='w-full my-3 flex flex-row items-center justify-evenly'>
                { current > 0  ? <div className='basis-1/5 flex items-center justify-evenly py-10' onClick={event => handleLeft(event)}><FiArrowLeftCircle className='hover:-translate-x-2 transition duration-[.5s] ease-out hover:cursor-pointer' style={iconStyles}/></div>: <div className='basis-1/5'></div>}
                {state.data && <CurrentPhoto className='mx-48 basis-4/5' image={state.data[current]}/>}
                { current < state.data.length -1 ? <div className='basis-1/5 flex items-center justify-evenly py-10' onClick={event => handleRight(event)}><FiArrowRightCircle className='hover:translate-x-2 transition duration-[.5s] ease-out hover:cursor-pointer' style={iconStyles}/></div>: <div className='basis-1/5'></div>}
            </div>
            <div id="photos" className='flex flex-row pb-3'>
                {state.data && state.data.map((image, i) => (
                        <Photo i={i} key={i} image={image.fileName} handler={handleClick} current={current}/>
                ))}
            </div>
        </div>
        }
        </>
    )
}

export default Gallery