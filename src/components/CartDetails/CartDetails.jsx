import React from 'react'
import cartItems from './cartItems'

const CartDetails = () => {
  return (
    <>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className='flex justify-center items-center gap-4'>
            <img src={item.url} alt={item.name} className='w-20' />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
      <p>
        Total:{' '}
        {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
      </p>
    </>
  )
}

export default CartDetails
