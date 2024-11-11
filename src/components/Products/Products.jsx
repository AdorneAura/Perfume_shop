import React, { useEffect, useRef, useState } from 'react'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/products'
import { getLocalCart } from '../../utils/cartLocalStorage'
import { extractProducts } from '../../utils/findProduct'
import { populateCart } from '../../store/cart/cart'
import ProductDetail from './ProductDetail'

const Products = () => {
  const [popupId, setPopupId] = useState(null)
  const [popupVisibility, setPopupVisibility] = useState(false)

  const products = useSelector(store => store.products.products)

  const dispatch = useDispatch()

  const renderCount = useRef(0)

  const setupCartItems = prods => {
    const lclCartItems = getLocalCart()
    const ep = extractProducts(lclCartItems, prods)
    dispatch(populateCart(ep))
  }

  const prod = async () => {
    const gotProds = await dispatch(fetchProducts())
    if (gotProds.type === 'FETCH_PRODUCTS/fulfilled') {
      setupCartItems(gotProds.payload.data)
    }
  }

  const handlePopupVisibility = () => setPopupVisibility(prev => !prev)

  const handlePopup = id => {
    setPopupId(id)
    handlePopupVisibility()
  }

  useEffect(() => {
    if (renderCount.current == 0 && products.length < 1) {
      prod()
      renderCount.current += 1
    }
  }, [renderCount.current, products.length])

  return (
    <div className='mb-[100px]'>
      <h1 className='text-center p-5 text-6xl font-bold my-[40px] text-yellow-600'>
        PRODUCTS
      </h1>
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {products.map((product, idx) => {
          if (product.available) {
            return (
              <SingleProduct product={product} key={product.documentId + idx} />
            )
          }
          return ''
        })}
      </ul>
      {/* <ProductDetail product={products[0]} /> */}
    </div>
  )
}

export default Products
