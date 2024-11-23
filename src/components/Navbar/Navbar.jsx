import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SideCart from './SideCart'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const cart = useSelector(store => store.cart.cart)

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  return (
    <>
      <nav className='flex justify-between items-center px-7 py-4 bg-black fixed top-0 left-0 right-0 z-10'>
        <NavLink to={'/'} className='mr-1'>
          <img src={logo} alt='adorn aura logo' className='w-[100px]' />
        </NavLink>
        <div className='flex items-center gap-5'>
          <form className='flex items-center gap-3'>
            <input
              type='text'
              placeholder='Search...'
              className='indent-2 p-1 rounded outline-none'
            />
            <button type='submit'>
              <FaSearch className='text-white' />
            </button>
          </form>
          <button
            onClick={toggleSidebar}
            className='text-white text-[40px] relative'
          >
            {cart.length > 0 && (
              <span className='bg-red-500 text-white text-[11px] font-bold rounded-[50%] py-1 px-2 absolute top-[-6px] left-[29px]'>
                {cart.length}
              </span>
            )}
            <FaShoppingCart />
          </button>
        </div>
      </nav>
      <SideCart
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        cart={cart}
      />
    </>
  )
}

export default Navbar
