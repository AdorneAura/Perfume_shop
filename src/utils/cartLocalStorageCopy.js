export const getLocalCart = () =>
  JSON.parse(localStorage.getItem('cartItems')) || []

export const setLocalCart = (item, variationKey) => {
  let localCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existingProductIndex = localCart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingProductIndex > -1) {
    // Product exists in cart
    const existingProduct = localCart[existingProductIndex];
    existingProduct.variation[variationKey] = {
      quantity: (existingProduct.variation[variationKey]?.quantity || 0) + item.variation[variationKey].quantity,
    };
    localCart[existingProductIndex] = existingProduct;
  } else {
    // Add new product to cart
    localCart.push(item);
  }

  localStorage.setItem('cartItems', JSON.stringify(localCart));
};


export const removeCartItem = id => {
  let cartItems = getLocalCart() || []
  const updatedCartItems = cartItems.filter(item => item.id !== id)
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  return id
}

export const clearLocStore = item => localStorage.clear()
