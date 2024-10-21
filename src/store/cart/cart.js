import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, payload) => {
      state.cart.push(payload)
    },
    removeFromCart: (state, payload) => {
      state.cart.filter(id => id === payload)
    },
    clearCart: state => {
      return initialState
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
