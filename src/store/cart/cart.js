import { createSlice } from '@reduxjs/toolkit'
import { findProductById } from '../../utils/findProduct';

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
    visibleMini: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { documentId, variationKey, quantity, product } = action.payload;
      const targetItem = state.cart.find(product => product.documentId === documentId);
      if (targetItem) {
        if (targetItem.variation && targetItem.variation[variationKey]) {
          targetItem.variation[variationKey].quantity += quantity;
        } else {
          targetItem.variation = {
            ...targetItem.variation,
            [variationKey]: { quantity }
          };
        }
      } else {
        state.cart.push({
          ...product,
          variation: {
            [variationKey]: { quantity }
          }
        });
      }
    },
    populateCart: (state, action) => {
      state.cart = action.payload
    },
    removeFromCart: (state, action) => {
      const { documentId, variationKey } = action.payload

      const res = [
        ...state.cart
          .map(item => {
            if (item.documentId === documentId) {
              const { [variationKey]: _, ...remainingVariations } =
                item.variation
              if (Object.keys(remainingVariations).length > 0) {
                return { ...item, variation: remainingVariations }
              }
              return null
            }
            return item
          })
          .filter(Boolean)
      ]

      state.cart = res
    },
    clearCart: () => {
      return { cart: [], visibleMini: false }
    },
    increaseQuantity: (state, action) => {
      const { documentId } = action.payload.item
      const { variationKey } = action.payload
      const targetItem = state.cart.find(
        product => product.documentId === documentId
      )
      if (targetItem) targetItem.variation[variationKey].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const { documentId } = action.payload.item
      const { variationKey } = action.payload
      const targetItem = state.cart.find(
        product => product.documentId === documentId
      )
      if (targetItem && targetItem.variation[variationKey].quantity > 1)
        targetItem.variation[variationKey].quantity -= 1
    },
    toggleMiniCart: (state) => {
      state.visibleMini =!state.visibleMini
    }
  }
})

export const {
  addToCart,
  populateCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  toggleMiniCart
} = cartSlice.actions
export default cartSlice.reducer
