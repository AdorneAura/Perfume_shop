import React, { useEffect, useRef } from 'react'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/products'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const prod = () => {
    dispatch(fetchProducts())
  }

  useEffect(() => {
    if (renderCount.current == 0 && products.length < 1) {
      prod()
      renderCount.current += 1
    }
  }, [renderCount.current, products.length])

  return (
    <div className='mb-[100px]'>
      <NavLink to='success'>NavLink</NavLink>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>
        PRODUCTS
      </h1>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {products.map((product, idx) => (
          <SingleProduct product={product} key={product.documentId + idx} />
        ))}
      </ul>
    </div>
  )
}

export default Products
