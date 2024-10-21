import React from 'react'

const SingleProduct = ({product}) => {
  return (
    <li className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'>
      <img src={product.image} alt={product.name} className='mb-[10px]' />
      <h2 className='text-center text-3xl'>{product.name}</h2>
      <p className='text-yellow-500 text-xl font-bold'>
        {product.price}Rs
      </p>
      <button className='bg-black text-white p-1 w-[80%] mt-4'>
        Add to cart
      </button>
    </li>
  )
}

export default SingleProduct
