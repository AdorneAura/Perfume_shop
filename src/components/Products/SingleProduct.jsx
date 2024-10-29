import React from 'react'
import { setLocalCart } from '../../utils/cartLocalStorage'
import { findProductById } from '../../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cart'

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch()
  
  const ps = useSelector(store => store.products.products)
  const addProductToCart = () => {
    const item = { id: product.documentId, quantity: 1 }
    setLocalCart(item)
    const productToRedux = findProductById(item.id, ps)
    dispatch(addToCart(productToRedux))
  }
  return (
    <li className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'>
      <img src={product.imgUrl} alt={product.title} className='mb-[10px]' />
      <h2 className='text-center text-3xl'>{product.title}</h2>
      <p className='text-yellow-500 text-xl font-bold'>{product.price}Rs</p>
      <span>Remaining: {product.remaining}</span>
      <button
        className='bg-black text-white p-1 w-[80%] mt-4'
        onClick={addProductToCart}
      >
        Add to cart
      </button>
    </li>
  )
}

export default SingleProduct
