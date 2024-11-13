import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getLocalCart, setLocalCart } from '../utils/cartLocalStorage'
import { findProductById } from '../utils/findProduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cart/cart'
import SingleCartItemBtn from '../components/CartDetails/SingleCartItemBtn'
import { findItem } from '../store/products/products'

const Detail = () => {

  const [productRem, setProductRem] = useState(0)
  const product = useSelector(store => store.products.singleProduct)
  console.log(product)

  const dispatch = useDispatch()

  const countRender = useRef(0)

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
      const id = window.location.pathname.split('/')[2]
      dispatch(findItem({id}))
      // handleRemItems()
      countRender.current += 1
    }
  }, [])

  return (
    <div className='product-detail flex flex-col justify-center items-center text-center text-[#636665] text-black gap-4 py-1 font-bold'>

    </div>
  )
}

export default Detail
