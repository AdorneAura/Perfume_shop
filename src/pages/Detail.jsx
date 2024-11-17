import React, { useEffect, useRef, useState } from 'react'
import { getLocalCart, setLocalCart } from '../utils/cartLocalStorageCopy'
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
  const id = window.location.pathname.split('/')[2]

  const [productRem, setProductRem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [itemVariation, setItemVariation] = useState(0)

  const product = useSelector(store => store.products.singleProduct)
  const ps = useSelector(store => store.products.products)
  const cartItems = useSelector(store => store.cart.cart)

  const dispatch = useDispatch()

  const handleItemVariation = e => {
    setItemVariation(e.target.id)
    setProductRem(product.inventory[Object.keys(product.inventory)[+e.target.id]].remaining - quantity)
    setQuantity(1)
  }

  const handleItemCounter = e => {
    const { id, innerHTML } = e.target
    let quantity
    innerHTML == '-' ? (quantity = -1) : (quantity = +1)
    setQuantity(prev => prev + quantity)
    setProductRem(product.inventory[Object.keys(product.inventory)[+e.target.id]].remaining - quantity)
  }

  const countRender = useRef(0)

  const handleRemItems = () => {
    const localCartProducts = getLocalCart() || []
    const qty = localCartProducts.filter(p => p.id == product.documentId)
    setProductRem(qty[0]?.quantity || 0)
  }

  const addProductToCart = () => {
    let variation = Object.keys(product.inventory)[itemVariation]
    const item = {
      id: product.documentId,
      variation: {
        [variation]: { quantity }
      }
    }
    setLocalCart(item, itemVariation)
    // const productToRedux = findProductById(item.id, ps)
    // dispatch(addToCart(productToRedux))
    // handleRemItems()
  }

  useEffect(() => {
    if (countRender.current === 0) {
      dispatch(findItem({ id }))
      countRender.current += 1
    }
  }, [])

  return (
    <div className='product-detail flex flex-col md:flex-row md:p-[30px] justify-center items-center text-center text-[#636665] text-black gap-4 py-1 font-bold'>
      {product ? (
        <>
          <img
            src={product.imgUrl}
            alt={product.title}
            className='max-w-[300px] md:max-w-[500px] my-[20px]'
          />
          <div className='flex flex-col items-center gap-1 md:max-w-[500px]'>
            <h1 className='text-3xl font-bold'>{product.title}</h1>
            <div className='flex flex-col items-center p-4 border m-[20px]'>
              <h3 className='text-xl mb-4 p-1 underline underline-offset-2'>
                Brief
              </h3>
              <p className='font-medium text-md text-justify'>
                {product.description}
              </p>
            </div>
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
            <span>Remaining: {productRem || product.inventory[Object.keys(product.inventory)[itemVariation]].remaining - quantity}</span>
            <div className='flex gap-1'>
              {Object.keys(product.inventory).map((item, idx) => (
                <button
                  key={item}
                  id={idx}
                  onClick={handleItemVariation}
                  className={`border border-black bg-${
                    idx === +itemVariation ? 'black' : 'white'
                  } text-${
                    idx === +itemVariation ? 'white' : 'black'
                  }  hover:bg-black hover:text-white w-[80px] transition-all rounded`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <SingleCartItemBtn
                id={product.documentId}
                text={'-'}
                handleItemCounter={handleItemCounter}
                disabled={productRem === 1}
              />
              <p>{quantity}</p>
              <SingleCartItemBtn
                id={product.documentId}
                text={'+'}
                handleItemCounter={handleItemCounter}
                disabled={productRem && productRem <= 0}
              />
            </div>
            <button
              className={`bg-${
                productRem > 0 ? 'black' : 'red-500'
              } text-white p-1 w-[80%] my-4`}
              onClick={addProductToCart}
              disabled={productRem > 0 ? false : true}
            >
              {productRem > 0
                ? 'Add to cart'
                : 'Out of Stock'}
            </button>
          </div>
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  )
}

export default Detail
