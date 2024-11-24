import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { getLocalCart } from '../utils/cartLocalStorage'
import { extractProducts } from '../utils/findProduct'
import { populateCart } from '../store/cart/cart'
import { useDispatch, useSelector } from 'react-redux'

const AppLayout = () => WrappedComponent => {
  return props => {
    const dispatch = useDispatch()
    const renderCount = useRef(0)

    const products = useSelector(store => store.products.products)

    const setupCartItems = () => {
      const lclCartItems = getLocalCart()
      const ep = extractProducts(lclCartItems, products)
      dispatch(populateCart(ep))
    }

    useEffect(() => {
      if (renderCount.current === 0) {
        setupCartItems()
        renderCount.current += 1
      }
    }, [])
    return (
      <>
        <Navbar />
        <div className='mt-[94px]'>
          <WrappedComponent {...props} />
        </div>
      </>
    )
  }
}

export default AppLayout
