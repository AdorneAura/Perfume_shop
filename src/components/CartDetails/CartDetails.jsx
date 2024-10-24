import React from 'react'
// import cartItems from './cartItems'
import { useSelector } from 'react-redux'

const CartDetails = () => {
  const cartItems = useSelector((store) => store.cart.cart)

  return (
    <>
      <ul className='flex flex-col justify-center items-center h-screen sm-w-[300px] mt-[160px] mb-[150px]'>
        {cartItems.map(item => (
          <li key={item.id} className='flex justify-center items-center gap-4'>
            <img src={item.url} alt={item.name} className='w-20' />
            <h3 className='min-w-[50px]'>{item.name}</h3>
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
