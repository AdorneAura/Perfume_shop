import React, { useEffect, useRef, useState } from 'react'
import { getLocalCart, setLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts, findProductById } from '../../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, populateCart } from '../../store/cart/cart'
import { reduceQuantity } from '../../store/products/products'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({ product }) => {
  const [productRem, setProductRem] = useState(0)

  const dispatch = useDispatch()
  const countRender = useRef(0)

  const ps = useSelector(store => store.products.products)

  // const addProductToCart = () => {
  //   const item = { id: product.documentId, quantity: 1 }
  //   setLocalCart(item)
  //   const productToRedux = findProductById(item.id, ps)
  //   dispatch(addToCart(productToRedux))
  //   handleRemItems()
  // }

  const handleRemItems = () => {
    const localCartProducts = getLocalCart() || []
    const qty = localCartProducts.filter(p => p.id == product.documentId)
    setProductRem(qty[0]?.quantity || 0)
  }

  useEffect(() => {
    if (countRender.current === 0) {
      handleRemItems()
      countRender.current += 1
    }
  }, [])
  return (
    <NavLink to={`/product/${product.documentId}`} className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'>
      <img src={product.imgUrl} alt={product.title} className='mb-[10px]' />
      <h2 className='text-center text-3xl'>{product.title}</h2>
      <div className='flex items-end gap-3'>
        {product.oldPrice > 0 && <span className='text-red-600 line-through'>{product.oldPrice}Rs</span>}
        <p className='text-yellow-500 text-xl font-bold'>{product.price}Rs</p>
      </div>
      <span>Remaining: {product.remaining - productRem}</span>
      {/* <button
        className={`bg-${
          product.remaining - productRem > 0 ? 'black' : 'red-500'
        } text-white p-1 w-[80%] mt-4`}
        onClick={addProductToCart}
        disabled={product.remaining - productRem > 0 ? false : true}
      >
        {product.remaining - productRem > 0 ? 'Add to cart' : 'Out of Stock'}
      </button>
      <NavLink to={"/cart"} className='bg-black border text-white p-1 w-[80%] text-center mt-[4px]'>
        Go to cart
      </NavLink> */}
    </NavLink>
  )
}

export default SingleProduct
