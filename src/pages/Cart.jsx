import React from 'react'
import CartDetails from '../components/CartDetails/CartDetails'
import BuyerForm from '../components/BuyerForm/BuyerForm'

const Cart = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mb-[50px]'>
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
    </div>
  )
}

export default Cart
