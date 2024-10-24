import React, { useState } from 'react'
import CartDetails from '../components/CartDetails/CartDetails'
import BuyerForm from '../components/BuyerForm/BuyerForm'
import Success from './Success'

const Cart = () => {
  const [step, setStep] = useState(1)
  const handleNext = () => setStep(step + 1)
  const handlePrev = () => setStep(step - 1)
  return (
    <div className='relative flex flex-col justify-center items-center mb-[50px]'>
      {
        step === 1 ? <CartDetails /> :
        step === 2 ? <BuyerForm /> :
        <Success />
      }
      <div className='flex justify-center gap-[100px]'>
        <button
          type='button'
          className='bg-black text-white font-bold text-xl w-[100px] h-[40px] rounded'
          onClick={handlePrev}
        >
          {'Back'}
        </button>
        <button
          type='button'
          className='bg-black text-white font-bold text-xl w-[100px] h-[40px] rounded'
          onClick={handleNext}
        >
          {'Next'}
        </button>
      </div>
    </div>
  )
}

export default Cart
