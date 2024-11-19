import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { documentId, variationKey } = action.payload;

      const targetItem = state.cart.find(
        (product) => product.documentId === documentId && product.variationKey === variationKey
      );

      if (targetItem) {
        targetItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    populateCart: (state, action) => {
      state.cart = action.payload;
    },
    removeFromCart: (state, action) => {
      const { documentId, variationKey } = action.payload;
    
      const res = [...state.cart
        .map(item => {
          if (item.documentId === documentId) {
            const { [variationKey]: _, ...remainingVariations } = item.variation;
            if (Object.keys(remainingVariations).length > 0) {
              return { ...item, variation: remainingVariations };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean)];

        state.cart = res
    },
    clearCart: () => {
      return { cart: [] };
    },
    increaseQuantity: (state, action) => {
      const { documentId, variationKey } = action.payload;
      const targetItem = state.cart.find(
        (product) => product.documentId === documentId && product.variationKey === variationKey
      );
      if (targetItem) targetItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const { documentId, variationKey } = action.payload;
      const targetItem = state.cart.find(
        (product) => product.documentId === documentId && product.variationKey === variationKey
      );
      if (targetItem && targetItem.quantity > 1) targetItem.quantity--;
    },
  },
});

export const {
  addToCart,
  populateCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
