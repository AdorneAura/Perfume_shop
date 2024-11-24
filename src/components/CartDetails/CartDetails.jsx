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
import CartPriceDetail from './CartPriceDetail'
import GrandTotal from './GrandTotal'

const CartDetails = () => {
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

  const priceDetail = [
    { id: 1, title: 'Subtotal', price: sumCartPrice(cartItems) },
    { id: 2, title: 'Delivery Service', price: 0 }
  ]

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
          <>
            <div className='flex justify-end w-full'>
              <div className='border border-black border-dashed w-[300px] mr-3' />
            </div>
            {priceDetail.map(pD => (
              <CartPriceDetail key={pD.id} title={pD.title} value={pD.price} />
            ))}
            <GrandTotal
              title={'Grand Total:'}
              value={sumCartPrice(cartItems)}
            />
          </>
        )}
      </ul>
    </>
  )
}

export default CartDetails
