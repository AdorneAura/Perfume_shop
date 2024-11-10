import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cart = useSelector(store => store.cart.cart)

  return (
    <nav className='flex justify-around items-center py-7 bg-black'>
      <NavLink to={'/'}>
        <img src={logo} alt='adorn aura logo' className='w-[150px]' />
      </NavLink>
      <NavLink to={'/cart'} className='text-white text-3xl'>
        {cart.length > 0 && (
          <span className='bg-red-500 text-white text-[11px] font-bold rounded-[50%] py-1 px-2 relative top-[20px] left-[16px]'>
            {cart.length}
          </span>
        )}
        <FaShoppingCart />
      </NavLink>
    </nav>
  )
}

export default Navbar
