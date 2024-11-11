import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getLocalCart, setLocalCart } from '../../utils/cartLocalStorage'
import { findProductById } from '../../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cart'


const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>Loading product details...</p>
  }

  const [productRem, setProductRem] = useState(0)

  const dispatch = useDispatch()

  const countRender = useRef(0)

  // const ps = useSelector(store => store.products.products)

  const handleRemItems = () => {
    const localCartProducts = getLocalCart() || []
    const qty = localCartProducts.filter(p => p.id == product.documentId)
    setProductRem(qty[0]?.quantity || 0)
  }

  const addProductToCart = () => {
    const item = { id: product.documentId, quantity: 1 }
    setLocalCart(item)
    const productToRedux = findProductById(item.id, ps)
    dispatch(addToCart(productToRedux))
    handleRemItems()
  }

  const {
    title,
    description,
    price,
    discountedPrice,
    remaining,
    imgUrl,
    available,
    publishedAt
  } = product

  useEffect(() => {
    if (countRender.current === 0) {
      handleRemItems()
      countRender.current += 1
    }
  }, [])

  return (
    <div className='product-detail flex flex-col justify-center items-center text-center text-[#636665] text-black gap-4 py-1 font-bold'>
      <div className='product-detail__image'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='product-detail__info p-3 font-serif'>
        <h1 className='text-4xl'>{title}</h1>
        <div>
          <h3>Format</h3>
          <div>
            <button className='py-1 px-4 border m-1 hover:bg-black hover:text-white transition-all rounded'>
              30ml
            </button>
            <button className='py-1 px-4 border m-1 hover:bg-black hover:text-white transition-all rounded'>
              45ml
            </button>
          </div>
        </div>
        <h2 className='text-start text-2xl mt-5'>Description</h2>
        <p className='text-justify'>{description}</p>
        <p>
          Price:{' '}
          <span className='product-detail__price'>
            ${discountedPrice ? discountedPrice : price}
          </span>
          {discountedPrice && (
            <span className='product-detail__original-price'> ${price}</span>
          )}
        </p>
        <p>Status: {available ? 'In Stock' : 'Out of Stock'}</p>
        {available && <p>Remaining: {remaining}</p>}
        <p>Published on: {new Date(publishedAt).toLocaleDateString()}</p>
        <div className='flex justify-center items-center'>
          <button
            className={`bg-${
              product.remaining - productRem > 0 ? 'black' : 'red-500'
            } text-white p-1 w-[80%] mt-4`}
            onClick={addProductToCart}
            disabled={product.remaining - productRem > 0 ? false : true}
          >
            {product.remaining - productRem > 0
              ? 'Add to cart'
              : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
