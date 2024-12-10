import React, { useEffect, useRef, useState } from 'react'
import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'
import CategoryButton from './CategoryButton'
import categories from './categories'

const Products = () => {
  const products = useSelector(store => store.products.products)
  const [category, setCategory] = useState('Perfumes')

  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-4xl font-bold my-[40px] text-yellow-600'>
        Our Products
      </h1>
      <div className='flex justify-end gap-3 px-3 mb-[50px]'>
        {categories.map(product => {
          return (
            <CategoryButton
              key={product.id}
              title={product.title}
              active={
                product.title === category
              }
              handleClick={() => setCategory(product.title)}
            />
          )
        })}
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center p-3'>
        {products.map((product, idx) => {
          if (product.available && product.category === category.slice(0, category.length - 1).toLowerCase()) {
            return (
              <SingleProduct product={product} key={product.documentId + idx} />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Products
