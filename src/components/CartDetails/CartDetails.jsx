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
import { sumCartPrice } from '../../utils/commonFun'

const CartDetails = ({ products }) => {
  const cartItems = useSelector(store => store.cart.cart)
  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const handleItemCounter = (item, variationKey, operator) => {
    let quantity = operator === '-' ? -1 : +1
    const updatedItem = {
      id: item.documentId,
      variation: { [variationKey]: { quantity } }
    }
    setLocalCart(updatedItem, variationKey)
    dispatch(
      operator === '+'
        ? increaseQuantity({ item, variationKey })
        : decreaseQuantity({ item, variationKey })
    )
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
      <ul className='flex flex-col items-start sm-w-[300px] mt-[60px] gap-4'>
        {cartItems.map(item => (
          <SingleCartItem
            key={`${item.documentId}-${item.variationKey}`}
            item={item}
            handleItemCounter={handleItemCounter}
          />
        ))}
        {cartItems.length > 0 && (
          <li className="self-end font-bold text-lg">
            Total:{' '}
            {sumCartPrice(cartItems)}{' '}
            Rs
          </li>
        )}
      </ul>
    </>
  )
}

export default CartDetails
