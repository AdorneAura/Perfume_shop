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

export const mergeArrays = (array1, array2) => {
  return array1.map(item1 => {
    const matchingItem = array2.find(item2 => item2.documentId === item1.id)
    return {
      id: item1.id,
      title: matchingItem ? matchingItem.title : null,
      variation: item1.variation
    }
  })
}
