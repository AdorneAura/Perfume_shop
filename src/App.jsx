import React, { Suspense } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Loader from './pages/Loader'
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Success = React.lazy(() => import('./pages/Success'))

const App = () => {
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
