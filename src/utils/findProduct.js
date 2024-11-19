export const findProductById = (id, products) => {
  return products.find(
    product => product.documentId.toString() === id.toString()
  )
}

export const extractProducts = (localStorageCartItems, products) => {
  const extractedProducts = [
    ...localStorageCartItems.map((i, idx) => {
      const product = findProductById(i.id, products)
      return { ...product, variation: localStorageCartItems[idx].variation }
    })
  ]
  return extractedProducts
}

export const updateRemainingQuantities = (cartItems, productList) => {
  const updatedProductList = productList.map(product => ({ ...product }))
  cartItems.forEach(cartItem => {
    const matchingProduct = updatedProductList.find(
      product => product.documentId === cartItem.id
    )
    if (matchingProduct) {
      matchingProduct.remaining = String(
        Math.max(0, Number(matchingProduct.remaining) - cartItem.quantity)
      )
    }
  })
  return updatedProductList
}
