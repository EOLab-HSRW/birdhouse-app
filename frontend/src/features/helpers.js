import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDevices, getImages} from '../ImageAPI';

export const devicesDispatch = createAsyncThunk("device/getData", async (arg, { rejectWithValue }) => {
    try {
        const { data } = await getDevices()
        return Promise.all(data.map( async (obj) => {
          const photos = await getImages(obj._id).then(photos => photos.data)
          const preview = photos[0] || {}
          const fileName = preview.fileName || ""
          return {
            ...obj,
            fileName
          }
        }))
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const imagesDispatch = createAsyncThunk("image/getData", async (arg, { rejectWithValue }) => {
  try {
      const { data } = await getImages(arg)
      return data
  } catch (error) {
      rejectWithValue(error.response.data)
  }
})