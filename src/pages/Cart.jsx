import React, { useEffect, useRef } from 'react'
import CartDetails from '../components/CartDetails/CartDetails'
import BuyerForm from '../components/BuyerForm/BuyerForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/products'
import Navbar from '../components/Navbar/Navbar'

const Cart = () => {
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const prod = () => {
    dispatch(fetchProducts())
  }

  useEffect(() => {
    if (products.length == 0 && renderCount.current === 0) {
      prod()
      renderCount.current += 1
    }
  }, [products])
  return (
    <>
      <Navbar />
      <div className='relative flex justify-center items-start mb-[50px] gap-10'>
        {products.length > 0 ? (
          <>
            <BuyerForm products={products} />
            <CartDetails products={products} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Cart
