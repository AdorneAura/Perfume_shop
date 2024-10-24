import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [
      {
        id: 1,
        name: 'test',
        price: 1000,
        quantity: 1,
        url: 'https://i5.walmartimages.com/seo/Ariana-Grande-Sweet-Like-Candy-Eau-de-Parfum-Perfume-for-Women-1-Oz_6e8a4fdb-601f-42e5-86b0-0ed64fb1412a.28b228882edbbd27cf7d851dad8ec0df.jpeg',
        remainingQty: 1
      },
      {
        id: 2,
        name: 'test2',
        price: 2000,
        quantity: 2,
        url: 'https://coswin.pk/cdn/shop/files/Elixir-perfume-01.webp?v=1697207421',
        remainingQty: 0
      },
      {
        id: 3,
        name: 'test3',
        price: 3000,
        quantity: 3,
        url: 'https://perfumeonline.pk/cdn/shop/files/PM106225-100-999-M_b40304c8-2aef-4f31-a70c-f077ca33f223_500x.jpg?v=1720440270',
        remainingQty: 2
      },
      {
        id: 4,
        name: 'test',
        price: 1000,
        quantity: 1,
        url: 'https://i5.walmartimages.com/seo/Ariana-Grande-Sweet-Like-Candy-Eau-de-Parfum-Perfume-for-Women-1-Oz_6e8a4fdb-601f-42e5-86b0-0ed64fb1412a.28b228882edbbd27cf7d851dad8ec0df.jpeg',
        remainingQty: 4
      },
      {
        id: 5,
        name: 'test2',
        price: 2000,
        quantity: 2,
        url: 'https://coswin.pk/cdn/shop/files/Elixir-perfume-01.webp?v=1697207421',
        remainingQty: 2
      },
      {
        id: 6,
        name: 'test3',
        price: 3000,
        quantity: 3,
        url: 'https://perfumeonline.pk/cdn/shop/files/PM106225-100-999-M_b40304c8-2aef-4f31-a70c-f077ca33f223_500x.jpg?v=1720440270',
        remainingQty: 5
      },
      {
        id: 7,
        name: 'test',
        price: 1000,
        quantity: 1,
        url: 'https://i5.walmartimages.com/seo/Ariana-Grande-Sweet-Like-Candy-Eau-de-Parfum-Perfume-for-Women-1-Oz_6e8a4fdb-601f-42e5-86b0-0ed64fb1412a.28b228882edbbd27cf7d851dad8ec0df.jpeg',
        remainingQty: 6
      },
      {
        id: 8,
        name: 'test2',
        price: 2000,
        quantity: 2,
        url: 'https://coswin.pk/cdn/shop/files/Elixir-perfume-01.webp?v=1697207421',
        remainingQty: 7
      },
      {
        id: 9,
        name: 'test3',
        price: 3000,
        quantity: 3,
        url: 'https://perfumeonline.pk/cdn/shop/files/PM106225-100-999-M_b40304c8-2aef-4f31-a70c-f077ca33f223_500x.jpg?v=1720440270',
        remainingQty: 0
      }
    ]
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
