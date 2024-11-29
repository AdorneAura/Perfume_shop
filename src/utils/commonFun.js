export const filterKeyValuePairs = (arr, keysToKeep) => {
  return arr.map(obj => {
    return Object.keys(obj)
      .filter(key => keysToKeep.includes(key))
      .reduce((filteredObj, key) => {
        filteredObj[key] = obj[key]
        return filteredObj
      }, {})
  })
}

export const sumCartPrice = cart => {
  let totalAmount = 0
  for (let i = 0; i < cart.length; i += 1) {
    const nestedCart = Object.keys(cart[i].variation)
    for (let j = 0; j < nestedCart.length; j += 1) {
      totalAmount +=
        cart[i].inventory[nestedCart[j]].newPrice *
        cart[i].variation[nestedCart[j]].quantity
    }
  }

  return totalAmount
}
