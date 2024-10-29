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
    populateCart: (state, action) => {
      state.cart = action.payload
    },
    removeFromCart: (state, payload) => {
      state.cart.filter(id => id === payload)
    },
    clearCart: state => {
      return initialState
    }
  }
})

export const { addToCart, populateCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
