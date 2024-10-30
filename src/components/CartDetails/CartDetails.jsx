import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLocalCart, setLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts } from '../../utils/findProduct'
import {
  increaseQuantity,
  decreaseQuantity,
  populateCart
} from '../../store/cart/cart'

const CartDetails = () => {
  const cartItems = useSelector(store => store.cart.cart)
  const products = useSelector(store => store.products.products)

  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const handleItemCounter = e => {
    const { id, innerHTML } = e.target
    let quantity
    innerHTML == '-' ? (quantity = -1) : (quantity = +1)
    const item = { id, quantity }
    setLocalCart(item)
    dispatch(innerHTML == '+' ? increaseQuantity(item) : decreaseQuantity(item))
  }

  const setupCartItems = () => {
    const lclCartItems = getLocalCart()
    const ep = extractProducts(lclCartItems, products)
    dispatch(populateCart(ep))
  }

  useEffect(() => {
    if (renderCount.current === 0) {
      setupCartItems()
      renderCount.current += 1
    }
  }, [])

  return (
    <>
      <ul className='flex flex-col justify-center items-center h-screen sm-w-[300px] mt-[160px] mb-[150px]'>
        {cartItems.map(item => (
          <li
            key={item.documentId}
            className='flex justify-center items-center gap-4'
          >
            <img src={item.imgUrl} alt={item.title} className='w-20' />
            <h3 className='min-w-[50px]'>{item.title}</h3>
            <p>Price: {item.price}</p>
            <div className='flex gap-2 justify-center items-center'>
              <button
                type='button'
                className='bg-black text-white text-lg font-bold w-[30px] h-[30px]'
                id={item.documentId}
                onClick={handleItemCounter}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type='button'
                className='bg-black text-white text-lg font-bold w-[30px] h-[30px]'
                id={item.documentId}
                onClick={handleItemCounter}
              >
                +
              </button>
            </div>
          </li>
        ))}
        <li>
          Total:{' '}
          {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
        </li>
      </ul>
    </>
  )
}

export default CartDetails
