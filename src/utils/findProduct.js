export const findProductById = (id, products) => {
  return products.find(
    product => product.documentId.toString() === id.toString()
  )
}

export const extractProducts = (localStorageCartItems, products) => {
  const extractedProducts = [
    ...localStorageCartItems.map(i => {
        const product = findProductById(i.id, products)
        return {...product, quantity: i.quantity }
    })
  ]
  return extractedProducts;
}
