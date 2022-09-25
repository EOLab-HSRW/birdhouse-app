import { createSlice } from '@reduxjs/toolkit'
import { devicesDispatch } from './helpers'

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {

  },
  extraReducers: {
    [devicesDispatch.pending]:(state, { payload }) => {
        state.loading = true
    },
    [devicesDispatch.fulfilled]:(state, { payload }) => {
        state.data = payload
        state.loading = false
        state.isSuccess = true
    },
    [devicesDispatch.rejected]:(state, { payload }) => {
        state.loading = false
        state.message = payload
        state.isSuccess = false
    },
  },
})

// export const { } = deviceSlice.actions

export default deviceSlice.reducer