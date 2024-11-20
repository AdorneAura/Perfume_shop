import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({ product }) => (
  <NavLink
    to={`/product/${product.documentId}`}
    className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'
  >
    <img src={product.imgUrl} alt={product.title} className='mb-[10px]' />
    <h2 className='text-center text-3xl'>{product.title}</h2>
    <div className='flex items-end gap-3'>
      {product.oldPrice > 0 && (
        <span className='text-red-600 line-through'>{product.oldPrice}Rs</span>
      )}
      <p className='text-yellow-500 text-xl font-bold'>{product.price}Rs</p>
    </div>
  </NavLink>
)

export default SingleProduct
