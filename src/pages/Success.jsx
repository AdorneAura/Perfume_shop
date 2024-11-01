import React from 'react'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 mt-[100px] '>
      <h1 className='sm:text-2xl md:text-3xl font-bold text-rose-800'>
        Thank you for your purchase!
      </h1>
      <NavLink
        to='/'
        className='bg-black text-white font-bold border border-black hover:bg-white hover:text-black p-3 transition-all rounded'
      >
        Continue Shopping
      </NavLink>
    </div>
  )
}

export default Success
