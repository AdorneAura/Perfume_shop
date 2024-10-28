export const getCart = () => localStorage.getItem('cartItems')

export const setCart = item => {
  let cartItems = getCart() || []
  if (cartItems) {
    cartItems = cartItems.push(item)
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
