export const getLocalCart = () =>
  JSON.parse(localStorage.getItem('cartItems')) || []

export const setLocalCart = (item, variationKey) => {
  let localCart = JSON.parse(localStorage.getItem('cartItems')) || []

  const existingProductIndex = localCart.findIndex(
    cartItem => cartItem.id === item.id
  )

  if (existingProductIndex > -1) {
    const existingProduct = localCart[existingProductIndex]
    existingProduct.variation[variationKey] = {
      quantity:
        (existingProduct.variation[variationKey]?.quantity || 0) +
        item.variation[variationKey].quantity
    }
    localCart[existingProductIndex] = existingProduct
  } else {
    localCart.push(item)
  }

  localStorage.setItem('cartItems', JSON.stringify(localCart))
}

export const removeCartItem = (documentId, variationKey) => {
  let cartItems = getLocalCart() || []

  const updatedCartItems = cartItems
    .map(item => {
      if (item.id === documentId) {
        const { [variationKey]: _, ...remainingVariations } = item.variation
        if (Object.keys(remainingVariations).length > 0) {
          return { ...item, variation: remainingVariations }
        }
        return null
      }
      return item
    })
    .filter(Boolean)

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  return updatedCartItems
}

export const clearLocStore = item => localStorage.clear()
