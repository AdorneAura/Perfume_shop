import React from 'react'
import products from './productsList'

const Products = () => {
  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>PRODUCTS</h1>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {products.map(product => (
          <li key={product.id} className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'>
            <img src={product.image} alt={product.name} />
            <h2 className='text-center text-3xl'>{product.name}</h2>
            <p className='text-yellow-500 text-center text-xl font-bold'>{product.price}Rs</p>
            <button className='bg-black text-white p-1 w-[80%] mt-4'>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
