import React from 'react'
import CartDetails from '../CartDetails/CartDetails'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideCart = ({ toggleSidebar, cart }) => {
  const miniCart = useSelector(store => store.cart.visibleMini)

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-white shadow-lg z-20 transform ${
          (miniCart) ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 overflow-scroll`}
      >
        <button
          onClick={toggleSidebar}
          className='p-2 text-black text-lg absolute top-4 right-4'
        >
          ✖
        </button>
        <h2 className='text-xl font-bold p-4'>Your Cart</h2>
        <div>
          {cart.length === 0 ? (
            <p className='ml-4'>Your cart is empty</p>
          ) : (
            <div className='flex flex-wrap justify-end gap-3'>
              <CartDetails />
              <NavLink
                to={'/cart'}
                onClick={toggleSidebar}
                className={`font-bold border border-black text-[20px] bg-black text-white p-2 mx-4 rounded hover:text-black hover:bg-white transition-all`}
              >
                Checkout
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {miniCart && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10'
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default SideCart
