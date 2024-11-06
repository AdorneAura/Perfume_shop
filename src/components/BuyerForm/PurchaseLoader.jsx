import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const PurchaseLoader = () => {
  return (
    <div className='fixed top-0 h-screen w-full flex justify-center items-center'>
      <div className='fixed top-0 h-screen bg-[rgba(0,0,0,0.9)] w-full' />
      <ClimbingBoxLoader
        color={'#fff'}
        loading={true}
        size={20}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default PurchaseLoader
