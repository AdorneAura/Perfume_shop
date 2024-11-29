import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SideCart from './SideCart'
import { toggleMiniCart } from '../../store/cart/cart'
// import Example from './NavTest'

const Navbar = () => {
  const cart = useSelector(store => store.cart.cart)
  const dispatch = useDispatch()

  const toggleSidebar = () => dispatch(toggleMiniCart())

  return (
    <>
      <nav className='flex justify-between items-center px-7 h-[97px] bg-black fixed top-0 left-0 right-0 z-10'>
        <NavLink to={'/'} className='mr-3 w-[100px]'>
          <img src={logo} alt='adorn aura logo' className='w-[100px]' />
        </NavLink>
        <div className='flex items-center gap-1'>
          <form className='flex items-center gap-1 relative'>
            <input
              type='text'
              placeholder='Search...'
              className='indent-2 p-1 rounded-[40px] outline-none'
            />
            <button type='submit'>
              <FaSearch className='text-white' />
            </button>
          </form>
          <button
            onClick={toggleSidebar}
            className='ml-1 text-white text-[30px] relative'
          >
            {cart.length > 0 && (
              <span className='bg-red-500 text-white text-[8px] font-bold rounded-[50%] py-1 px-2 absolute top-[-6px] left-[20px]'>
                {cart.length}
              </span>
            )}
            <FaShoppingCart />
          </button>
        </div>
      </nav>
      <SideCart
        toggleSidebar={toggleSidebar}
        cart={cart}
      />
    </>
  )
}

export default Navbar
