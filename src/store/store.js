import { configureStore } from '@reduxjs/toolkit'
import buyer from './buyer/buyer'
import cart from './cart/cart'
import products from './products/products'

const store = configureStore({
  reducer: {
    buyer,
    cart,
    products
  }
})

export default store
