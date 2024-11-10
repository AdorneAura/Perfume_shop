import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const targetItem = state.cart.find(
        product => product.documentId === action.payload.documentId
      )
      if (targetItem) {
        targetItem.quantity++
      } else {
        state.cart.push(action.payload)
      }
    },
    populateCart: (state, action) => {
      state.cart = action.payload
    },
    removeFromCart: (state, action) => {
      const targetItem = state.cart.find(
        product => product.documentId === action.payload.id
      )
      targetItem.quantity = targetItem.quantity - action.payload.quantity
      state.cart = state.cart.filter(
        item => item.documentId !== action.payload.id
      )
    },
    clearCart: state => {
      return initialState
    },
    increaseQuantity: (state, action) => {
      const targetItem = state.cart.find(
        product => product.documentId === action.payload.id
      )
      targetItem.quantity++
    },
    decreaseQuantity: (state, action) => {
      const targetItem = state.cart.find(
        product => product.documentId === action.payload.id
      )
      targetItem.quantity--
    }
  }
})

export const {
  addToCart,
  populateCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions
export default cartSlice.reducer
