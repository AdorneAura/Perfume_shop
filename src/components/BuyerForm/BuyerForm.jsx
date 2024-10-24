import React from 'react'

const BuyerForm = () => {
  return (
    <form className='flex flex-col gap-5 justify-center my-[100px] bg-red-500 p-[100px]'>
      <input className='w-[300px] border p-4' type='text' placeholder='Full Name' />
      <input className='w-[300px] border p-4' type='text' placeholder='Phone No.' />
      <input className='w-[300px] border p-4' type='email' placeholder='Email(Optional)' />
      <input className='w-[300px] border p-4' type='text' placeholder='Delivery Address' />
    </form>
  )
}

export default BuyerForm
