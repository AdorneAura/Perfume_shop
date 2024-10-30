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
    },
    increaseQuantity: (state, action) => {
      const targetItem = state.cart.find(product => product.documentId === action.payload.id)
      targetItem.quantity++
    },
    decreaseQuantity: (state, action) => {
      const targetItem = state.cart.find(product => product.documentId === action.payload.id)
      targetItem.quantity--
    }
  }
})

export const { addToCart, populateCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
