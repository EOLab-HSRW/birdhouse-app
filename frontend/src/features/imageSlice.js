import { createSlice } from '@reduxjs/toolkit'
import { imagesDispatch } from './helpers'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {
   
  },
  extraReducers: {
    [imagesDispatch.pending]:(state, { payload }) => {
        state.loading = true
    },
    [imagesDispatch.fulfilled]:(state, { payload }) => {
        state.data = payload
        state.loading = false
        state.isSuccess = true
    },
    [imagesDispatch.rejected]:(state, { payload }) => {
        state.loading = false
        state.message = payload
        state.isSuccess = false
    },
  },
})

// export const {  } = imageSlice.actions

export default imageSlice.reducer