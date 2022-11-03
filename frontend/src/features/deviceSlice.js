import { createSlice } from '@reduxjs/toolkit'
import { devicesDispatch } from './helpers'

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    data: [],
    filtered: [],
    isSuccess: false,
    message: "",
    loading: false,
    search: "",
  },
  reducers: {
    searchDevices: (state, action) => {
      if (action.payload.length > 0) {
        state.filtered = state.data.filter((device) => 
          device.deviceName.toLowerCase().includes(action.payload.toLowerCase())
          || device.deviceSchool.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: {
    [devicesDispatch.pending]:(state, { payload }) => {
        state.loading = true
    },
    [devicesDispatch.fulfilled]:(state, { payload }) => {
        state.data = payload
        state.filtered = payload
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

export const { searchDevices } = deviceSlice.actions

export default deviceSlice.reducer