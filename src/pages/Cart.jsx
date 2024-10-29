import React, { useEffect } from 'react'
import CartDetails from '../components/CartDetails/CartDetails'
import BuyerForm from '../components/BuyerForm/BuyerForm'
import { extractProducts } from '../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/products'

const Cart = () => {
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()

  const prod = () => {
    dispatch(fetchProducts())
  }
  console.log("before")
  useEffect(() => {
    if (products.length == 0) {
      prod()
    }
  }, [products])
  return (
    <div className='relative flex flex-col justify-center items-center mb-[50px]'>
      {
        products.length > 0 ? (
          <>
            <CartDetails />
            {/* <BuyerForm />
            <div className='flex justify-center gap-[100px]'>
              <button
                type='button'
                className='bg-black text-white font-bold text-xl w-[100px] h-[40px] rounded'
              >
                {'Back'}
              </button>
              <button
                type='button'
                className='bg-black text-white font-bold text-sm w-[100px] h-[40px] rounded'
              >
                {'Confirm Purchase'}
              </button>
            </div> */}
          </>
        ) : <p>Loading...</p>
      }
      {/* <BuyerForm />
      <div className='flex justify-center gap-[100px]'>
        <button
          type='button'
          className='bg-black text-white font-bold text-xl w-[100px] h-[40px] rounded'
        >
          {'Back'}
        </button>
        <button
          type='button'
          className='bg-black text-white font-bold text-sm w-[100px] h-[40px] rounded'
        >
          {'Confirm Purchase'}
        </button>
      </div> */}
    </div>
  )
}

export default Cart
