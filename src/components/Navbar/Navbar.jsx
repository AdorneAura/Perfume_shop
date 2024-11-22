import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cart = useSelector(store => store.cart.cart)
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', handleNavbar);

  return (
    <nav
      className={`flex justify-around items-center py-7 bg-black ${
        navbar ? 'fixed' : 'static'
      } top-0 left-0 right-0 z-10`}
    >
      <NavLink to={'/'}>
        <img src={logo} alt='adorn aura logo' className='w-[150px]' />
      </NavLink>
      <NavLink to={'/cart'} className='text-white text-5xl'>
        {cart.length > 0 && (
          <span className='bg-red-500 text-white text-[11px] font-bold rounded-[50%] py-1 px-2 relative top-[16px] left-[29px]'>
            {cart.length}
          </span>
        )}
        <FaShoppingCart />
      </NavLink>
    </nav>
  )
}

export default Navbar
