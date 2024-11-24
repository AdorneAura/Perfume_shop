import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../../controllers/productController'
import { getCarouselImages } from '../../controllers/carouselController'

const initialState = {
  products: [],
  carousel: [],
  singleProduct: null,
  status: 'idle'
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const [carouselResponse, productsResponse] = await Promise.all([
      getCarouselImages(),
      getProducts()
    ]);
    return {
      carousel: carouselResponse.data.data,
      products: productsResponse.data.data
    };
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addUpdatedList: (state, action) => {
      state.products = action.payload;
    },
    addQuantity: (state, action) => {
      const targetItem = state.products.find(
        product => product.documentId === action.payload.id
      );
      if (targetItem) {
        targetItem.remaining++;
      }
    },
    reduceQuantity: (state, action) => {
      const targetItem = state.products.find(
        product => product.documentId === action.payload.id
      );
      if (targetItem) {
        targetItem.remaining = Math.max(0, targetItem.remaining - action.payload.quantity);
      }
    },
    findItem: (state, action) => {
      const targetItem = state.products.find(
        product => product.documentId === action.payload.id
      );
      state.singleProduct = targetItem || null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { carousel, products } = action.payload;
        state.status = 'succeeded';
        state.products = products;
        state.carousel = carousel;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed';
      });
  }
});

export const { addUpdatedList, addQuantity, reduceQuantity, findItem } = productsSlice.actions;
export default productsSlice.reducer;
