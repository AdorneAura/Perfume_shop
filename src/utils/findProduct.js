const getIds = arr => {
  return arr.map(item => item.id)
}

const getQty = arr => {
  return arr.map(item => item.quantity)
}

export const findProductById = (id, products) => {
  return products.find(
    product => product.documentId.toString() === id.toString()
  )
}

export const extractProducts = (localStorageCartItems, products) => {
  console.log(localStorageCartItems, products)
  const extractedIds = []
}
