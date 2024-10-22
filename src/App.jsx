import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Success from './pages/Success'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  )
}

export default App
