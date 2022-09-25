import { configureStore } from '@reduxjs/toolkit'
import deviceSlice from '../features/deviceSlice'
import imageSlice from '../features/imageSlice'

export default configureStore({
    reducer: {
        image: imageSlice,
        device: deviceSlice
    }
})