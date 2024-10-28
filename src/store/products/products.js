import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productsList from '../../components/Products/productsList'
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
    addQuantity: (state, action) => {
      const targetItem = state.products.find(
        product => product.id == action.payload
      )
      return targetItem
    },
    reducerQuantity: state => {
      const targetItem = state.products.find(
        product => product.id == action.payload
      )
      return targetItem
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

export const { addQuantity, reducerQuantity } = productsSlice.actions
export default productsSlice.reducer

/*
  1. Find the target item
  2. reduce or increase the quantity
  3. replace it back with the old target item
*/
