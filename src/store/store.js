import { configureStore } from '@reduxjs/toolkit'
import buyer from './buyer/buyer'
import cart from './cart/cart'

const store = configureStore({
  reducer: {
    buyer,
    cart
  }
})

export default store
