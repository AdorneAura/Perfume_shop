import React from 'react'
import logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
// import navlinks from './navlinks'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center py-7 bg-black'>
      <img src={logo} alt='adorn aura logo' className='w-[150px]' />
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
        <FaShoppingCart />
      </NavLink>
    </nav>
  )
}

export default Navbar
