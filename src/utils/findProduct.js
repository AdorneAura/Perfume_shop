export const findProductById = (id, products) => {
  return products.find(product => product.id.toString() === id.toString())
}

export const extractProducts = (localStorageCartItems, products) => {
    
}