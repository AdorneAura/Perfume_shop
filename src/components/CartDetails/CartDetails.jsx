import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts } from '../../utils/findProduct'
import { populateCart } from '../../store/cart/cart'

const CartDetails = () => {
  const cartItems = useSelector(store => store.cart.cart)
  const products = useSelector(store => store.products.products)

  const dispatch = useDispatch()

  const setupCartItems = () => {
    const lclCartItems = getLocalCart()
    const ep = extractProducts(lclCartItems, products)
    dispatch(populateCart(ep))
  }

  useEffect(() => {
    setupCartItems()
  }, [])

  return (
    <>
      <ul className='flex flex-col justify-center items-center h-screen sm-w-[300px] mt-[160px] mb-[150px]'>
        {cartItems.map(item => (
          <li key={item.documentId} className='flex justify-center items-center gap-4'>
            <img src={item.imgUrl} alt={item.title} className='w-20' />
            <h3 className='min-w-[50px]'>{item.title}</h3>
            <p>Price: {item.price}</p>
            <div className='flex gap-2 justify-center items-center'>
              <button
                type='button'
                className='bg-black text-white text-lg font-bold w-[30px] h-[30px]'
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type='button'
                className='bg-black text-white text-lg font-bold w-[30px] h-[30px]'
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

/*

First get the documentId of the product means the inc and dec buttons should have the documentId
Second find the item details with the documentId in the localStorage and increase it and decrease it
After increaseing and decreasing the quantity, set it back to local storage
After extract the products and set back to redux
*/