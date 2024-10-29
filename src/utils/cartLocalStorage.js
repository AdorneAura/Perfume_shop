export const getLocalCart = () => JSON.parse(localStorage.getItem('cartItems'))

export const setLocalCart = item => {
  let cartItems = getLocalCart() || []
  if (cartItems) {
    const existingItem = cartItems.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      cartItems.push(item)
    }
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
