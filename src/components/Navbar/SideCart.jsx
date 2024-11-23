import React from 'react'
import SideCartItem from './SideCartItem'
import { useSelector } from 'react-redux'
import CartDetails from '../CartDetails/CartDetails'

const SideCart = ({isSidebarOpen, toggleSidebar, cart}) => {
  const products = useSelector(store => store.products.products)

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className='p-2 text-black text-lg absolute top-4 right-4'
        >
          ✖
        </button>
        <h2 className='text-xl font-bold p-4'>Your Cart</h2>
        <div className='p-4'>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartDetails products={products} />
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10'
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default SideCart
