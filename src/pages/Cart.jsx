import React from 'react'
import CartDetails from '../components/CartDetails/CartDetails'
import BuyerForm from '../components/BuyerForm/BuyerForm'
import { useSelector } from 'react-redux'
import AppLayout from '../Layout/AppLayout'
import Loader from './Loader'

const Cart = () => {
  const products = useSelector(store => store.products.products)

  return (
    <>
      <div className='relative flex flex-col lg:flex-row justify-center items-center lg:items-start mb-[50px] gap-10'>
        {products.length > 0 ? (
          <>
            <CartDetails products={products} />
            <BuyerForm products={products} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
}

export default AppLayout()(Cart)
