import React, { Suspense, useEffect, useRef } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Loader from './pages/Loader'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './store/products/products'
import { extractProducts } from './utils/findProduct'
import { getLocalCart } from './utils/cartLocalStorage'
import { populateCart } from './store/cart/cart'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Success = React.lazy(() => import('./pages/Success'))

const App = () => {
  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const setupCartItems = prods => {
    const lclCartItems = getLocalCart()
    const ep = extractProducts(lclCartItems, prods)
    dispatch(populateCart(ep))
  }

  const prod = async () => {
    dispatch(fetchProducts()).then(res => {
      if (res.type === 'FETCH_PRODUCTS/fulfilled') {
        setupCartItems(res.payload[1].data.data)
      }
    })
  }

  useEffect(() => {
    if (renderCount.current === 0) {
      prod()
      renderCount.current = +1
    }
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:documentId' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Suspense>
  )
}

export default App
