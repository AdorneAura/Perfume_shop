import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLocalCart, setLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts } from '../../utils/findProduct'
import {
  increaseQuantity,
  decreaseQuantity,
  populateCart
} from '../../store/cart/cart'
import SingleCartItem from './SingleCartItem'

const CartDetails = ({ products }) => {
  const cartItems = useSelector(store => store.cart.cart)

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
        {cartItems.map(item => {
          return (
            <SingleCartItem
              key={item.documentId}
              item={item}
              handleItemCounter={handleItemCounter}
            />
          )
        })}
        <li>
          Total:{' '}
          {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
        </li>
      </ul>
    </>
  )
}

export default CartDetails
