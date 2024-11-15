import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../../controllers/productController'

const initialState = {
  products: [],
  status: 'idle'
}

export const fetchProducts = createAsyncThunk('FETCH_PRODUCTS', async () => {
  const res = await getProducts()
  return res.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addUpdatedList: (state, action) => {
      state.products = action.payload
    },
    addQuantity: (state, action) => {
      const targetItem = state.products.find(
        product => product.id == action.payload.id
      )
      targetItem.remaining++
    },
    reduceQuantity: (state, action) => {
      const targetItem = state.products.find(
        product => product.documentId == action.payload.id
      )
      console.log({ ...targetItem })
      targetItem.remaining = +targetItem.remaining - action.payload.quantity
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = [...state.products, ...action.payload.data]
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed'
      })
  }
})

export const { addUpdatedList, addQuantity, reduceQuantity } =
  productsSlice.actions
export default productsSlice.reducer
