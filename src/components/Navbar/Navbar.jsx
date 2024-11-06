import React from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import navlinks from './navlinks'

const Navbar = () => {
  const cart = useSelector(store => store.cart.cart)

  return (
    <nav className='flex justify-around items-center py-7 bg-black'>
      <NavLink to={'/'}>
      <img src={logo} alt='adorn aura logo' className='w-[150px]' />
      </NavLink>
      {/* <ul className='flex gap-3'>
        {
          navlinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='text-white text-xl font-bold'>
                {link.label}
              </a>
            </li>
          ))
        }
      </ul> */}
      <NavLink to={'/cart'} className='text-white text-3xl'>
        {/* {cart.length > 0 && (
          <span className='bg-red-500 text-white text-[11px] font-bold rounded-[50%] p-1 relative top-[20px] left-[16px]'>
            {cart.length}
          </span>
        )} */}
        <FaShoppingCart />
      </NavLink>
    </nav>
  )
}

export default Navbar
