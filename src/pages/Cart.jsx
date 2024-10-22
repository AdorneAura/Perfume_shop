import React, { useState } from 'react'
import CartDetails from '../components/CartDetails/CartDetails'

const Cart = () => {
    const [step, setStep] = useState(1)
  return (
    <div>
      <CartDetails />
    </div>
  )
}

export default Cart
