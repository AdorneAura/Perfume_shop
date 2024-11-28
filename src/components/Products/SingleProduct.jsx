import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({ product }) => (
  <NavLink
    to={`/product/${product.documentId}`}
    className='w-full h-full max-w-[300px] p-2 flex flex-col justify-between items-center shadow-xl shadow-yellow-500 hover:shadow-xl transition-shadow duration-300 rounded-lg'
  > 
    <img
      src={product.imgUrl}
      alt={product.title}
      className='mb-4 w-full h-[200px] object-contain rounded-md'
    />
    <h2 className='text-center text-lg font-semibold md:text-xl lg:text-2xl'>
      {product.title}
    </h2>
    <div className='flex items-end gap-2 mt-2'>
      {product.oldPrice > 0 && (
        <span className='text-sm md:text-base text-red-600 line-through'>
          {product.oldPrice} Rs
        </span>
      )}
      <p className='text-yellow-500 text-base md:text-lg lg:text-xl font-bold'>
        {product.price} Rs
      </p>
    </div>
  </NavLink>
)

export default SingleProduct
