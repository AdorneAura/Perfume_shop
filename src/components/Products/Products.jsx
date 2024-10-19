import React from 'react'
import products from './productsList'
import SingleProduct from './SingleProduct'

const Products = () => {
  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>
        PRODUCTS
      </h1>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {products.map(product => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default Products
