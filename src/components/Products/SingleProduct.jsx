import React, { useEffect, useState } from 'react'
import { getLocalCart, setLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts, findProductById } from '../../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, populateCart } from '../../store/cart/cart'

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch()

  // const ps = useSelector(store => store.products.products)

  // const setupCartItems = () => {
  //   const lclCartItems = getLocalCart()
  //   const ep = extractProducts(lclCartItems, ps)
  //   dispatch(populateCart(ep))
  // }

  const addProductToCart = () => {
    const item = { id: product.documentId, quantity: 1 }
    setLocalCart(item)
    const productToRedux = findProductById(item.id, ps)
    dispatch(addToCart(productToRedux))
  }

  const remainingProds = () => {
    const localCartProducts = getLocalCart()
    const qty = (localCartProducts.filter(p => p.id == product.documentId))
    return product.remaining - (qty[0]?.quantity || 0)
  }

  // useEffect(() => {
  //   setupCartItems()
  // }, [])
  return (
    <li className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'>
      <img src={product.imgUrl} alt={product.title} className='mb-[10px]' />
      <h2 className='text-center text-3xl'>{product.title}</h2>
      <p className='text-yellow-500 text-xl font-bold'>{product.price}Rs</p>
      <span>Remaining: {remainingProds()}</span>
      <button
        className={`bg-${remainingProds() > 0 ? 'black' : 'red-500'} text-white p-1 w-[80%] mt-4`}
        onClick={addProductToCart}
        disabled={remainingProds() > 0 ? false : true}
      >
        {remainingProds() > 0 ? 'Add to cart' : 'Out of Stock'}
      </button>
    </li>
  )
}

export default SingleProduct
