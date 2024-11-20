import React, { useEffect, useRef } from 'react'
import { getLocalCart } from '../../utils/cartLocalStorage'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({ product }) => {
  const countRender = useRef(0)

  const handleRemItems = () => {
    const localCartProducts = getLocalCart() || []
    const qty = localCartProducts.filter(p => p.id == product.documentId)
    setProductRem(qty[0]?.quantity || 0)
  }

  useEffect(() => {
    if (countRender.current === 0) {
      handleRemItems()
      countRender.current += 1
    }
  }, [])
  return (
    <NavLink
      to={`/product/${product.documentId}`}
      className='max-w-[300px] pb-[30px] flex flex-col justify-center items-center shadow-2xl'
    >
      <img src={product.imgUrl} alt={product.title} className='mb-[10px]' />
      <h2 className='text-center text-3xl'>{product.title}</h2>
      <div className='flex items-end gap-3'>
        {product.oldPrice > 0 && (
          <span className='text-red-600 line-through'>
            {product.oldPrice}Rs
          </span>
        )}
        <p className='text-yellow-500 text-xl font-bold'>{product.price}Rs</p>
      </div>
    </NavLink>
  )
}

export default SingleProduct
