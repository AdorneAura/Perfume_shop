export const getLocalCart = () =>
  JSON.parse(localStorage.getItem('cartItems')) || []

export const setLocalCart = (item, variationKey) => {
  let localCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existingProductIndex = localCart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingProductIndex > -1) {
    const existingProduct = localCart[existingProductIndex];
    existingProduct.variation[variationKey] = {
      quantity: (existingProduct.variation[variationKey]?.quantity || 0) + item.variation[variationKey].quantity,
    };
    localCart[existingProductIndex] = existingProduct;
  } else {
    localCart.push(item);
  }

  localStorage.setItem('cartItems', JSON.stringify(localCart));
};


export const removeCartItem = (documentId, variationKey) => {
  let cartItems = getLocalCart() || []; // Fetch current cart items from local storage
  
  const updatedCartItems = cartItems
    .map(item => {
      if (item.id === documentId) {
        const { [variationKey]: _, ...remainingVariations } = item.variation; // Remove the specified variation
        if (Object.keys(remainingVariations).length > 0) {
          return { ...item, variation: remainingVariations }; // Update item with remaining variations
        }
        return null; // Mark the item for removal if no variations are left
      }
      return item; // Leave other items unchanged
    })
    .filter(Boolean); // Remove null entries
  
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save the updated cart
  return updatedCartItems; // Return the updated cart for further use if needed
};

export const clearLocStore = item => localStorage.clear()
