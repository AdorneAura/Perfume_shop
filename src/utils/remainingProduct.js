import { findProductById } from "./findProduct"

export const remainingProduct = (id, total, inCart) => {
    const product = findProductById(id, inCart)
    console.log(product)
}
