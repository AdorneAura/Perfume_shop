import React from 'react'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
    <div className='text-center border mt-[300px]'>
      <h1>Thank you for your purchase!</h1>
      <NavLink to='/'>
        Continue Shopping
      </NavLink>
    </div>
  )
}

export default Success
