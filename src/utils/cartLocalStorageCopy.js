export const getLocalCart = () =>
  JSON.parse(localStorage.getItem('cartItems')) || []

export const setLocalCart = (item) => {
  let cartItems = getLocalCart() || []
  if (cartItems) {
    const existingItem = cartItems.find(i => i.id === item.id)
    if (existingItem) {
      const qty = Object.keys(item.variation)[0]

      if (!existingItem.variation[qty]) {
        existingItem.variation[qty] = { quantity: 0 }
      }

      const finalQty =
        +existingItem.variation[qty].quantity + item.variation[qty].quantity

      existingItem.variation[qty].quantity = finalQty
    } else {
      cartItems.push(item)
    }
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeCartItem = id => {
  let cartItems = getLocalCart() || []
  const updatedCartItems = cartItems.filter(item => item.id !== id)
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  return id
}

export const clearLocStore = item => localStorage.clear()
