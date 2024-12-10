import React, { Suspense, useEffect, useRef } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Loader from './pages/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/products/products'
import { extractProducts } from './utils/findProduct'
import { populateCart } from './store/cart/cart'
import { getLocalCart } from './utils/cartLocalStorage'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Success = React.lazy(() => import('./pages/Success'))
const TrackOrder = React.lazy(() => import('./pages/TrackOrder'))

const App = () => {
  const dispatch = useDispatch()
  const renderCount = useRef(0)

  const prod = async () => {
    dispatch(fetchProducts())
    .then(res => {
      if (res.type === 'products/fetchProducts/fulfilled') {
        const products = res.payload.products
        const lclCartItems = getLocalCart()
        const ep = extractProducts(lclCartItems, products)
        dispatch(populateCart(ep))
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
        <Route path='/orders' element={<TrackOrder />} />
      </Routes>
    </Suspense>
  )
}

export default App
