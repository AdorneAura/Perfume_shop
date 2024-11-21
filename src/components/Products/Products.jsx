import React, { useEffect, useRef, useState } from 'react'
import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector(store => store.products.products)

  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>
        PRODUCTS
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {products.map((product, idx) => {
          if (product.available) {
            return (
              <SingleProduct product={product} key={product.documentId + idx} />
            )
          }
          return ''
        })}
      </div>
    </div>
  )
}

export default Products
