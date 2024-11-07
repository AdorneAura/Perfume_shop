import React, { useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <ClimbingBoxLoader
        color={"#8d053e"}
        loading={true}
        size={20}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Loader
