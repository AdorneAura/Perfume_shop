import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const buyerSlice = createSlice({
  name: 'buyerSlice',
  initialState,
  reducers: {
    addBuyerInfo: (state, payload) => {
      state = { ...state, payload }
    },
    clearBuyerInfo: state => {
      return initialState
    }
  }
})

export const { addBuyerInfo, clearBuyerInfo } = buyerSlice.actions
export default buyerSlice.reducer
