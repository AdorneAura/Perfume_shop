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
