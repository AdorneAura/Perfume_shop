import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getLocalCart, setLocalCart } from '../utils/cartLocalStorage'
import { findProductById } from '../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity
} from '../store/cart/cart'
import SingleCartItemBtn from '../components/CartDetails/SingleCartItemBtn'
import { findItem } from '../store/products/products'

const Detail = () => {
  const [productRem, setProductRem] = useState(0)
  const product = useSelector(store => store.products.singleProduct)
  // const [itemCounter, setItemCounter] = useState(product.remaining)

  const dispatch = useDispatch()

  console.log(product)

  const handleItemCounter = e => {
    const { id, innerHTML } = e.target
    let quantity
    innerHTML == '-' ? (quantity = -1) : (quantity = +1)
    const item = { id, quantity }
    setLocalCart(item)
    dispatch(innerHTML == '+' ? increaseQuantity(item) : decreaseQuantity(item))
  }

  // if (!product) return <p>Loading...</p>

  const countRender = useRef(0)

  // const handleRemItems = () => {
  //   const localCartProducts = getLocalCart() || []
  //   const qty = localCartProducts.filter(p => p.id == product.documentId)
  //   setProductRem(qty[0]?.quantity || 0)
  // }

  // const addProductToCart = () => {
  //   const item = { id: product.documentId, quantity: 1 }
  //   setLocalCart(item)
  //   const productToRedux = findProductById(item.id, ps)
  //   dispatch(addToCart(productToRedux))
  //   handleRemItems()
  // }

  // const {
  //   title,
  //   description,
  //   price,
  //   discountedPrice,
  //   remaining,
  //   imgUrl,
  //   available,
  //   publishedAt
  // } = product

  useEffect(() => {
    if (countRender.current === 0) {
      const id = window.location.pathname.split('/')[2]
      dispatch(findItem({ id }))
      //   // handleRemItems()
      countRender.current += 1
    }
  }, [])

  return (
    <div className='product-detail flex flex-col justify-center items-center text-center text-[#636665] text-black gap-4 py-1 font-bold'>
      {product ? (
        <>
          <img
            src={product.imgUrl}
            alt={product.title}
            className='max-w-[300px] my-[20px]'
          />
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <div className='flex gap-2'>
            {product.oldPrice && (
              <span className='text-red-600 line-through'>
                {product.oldPrice} Rs
              </span>
            )}
            <span className='text-yellow-500 font-bold'>
              Price: {product.price} Rs
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <SingleCartItemBtn
              id={product.documentId}
              text={'-'}
              handleItemCounter={handleItemCounter}
              disabled={product.quantity === 1}
            />
            <p>{product.remaining}</p>
            <SingleCartItemBtn
              id={product.documentId}
              text={'+'}
              handleItemCounter={handleItemCounter}
              disabled={+product.remaining - product.quantity === 0}
            />
          </div>
          <button
            className={`bg-${
              product.remaining - productRem > 0 ? 'black' : 'red-500'
            } text-white p-1 w-[80%] mt-4`}
            // onClick={addProductToCart}
            disabled={product.remaining - productRem > 0 ? false : true}
          >
            {product.remaining - productRem > 0
              ? 'Add to cart'
              : 'Out of Stock'}
          </button>
          <div className='flex flex-col items-center p-4 border m-[20px]'>
            <h3 className='text-xl mb-4 p-1 underline underline-offset-2'>
              Brief
            </h3>
            <p className='font-medium text-md text-justify'>
              {product.description}
            </p>
          </div>
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  )
}

export default Detail
