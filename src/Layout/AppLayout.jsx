import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const AppLayout = () => WrappedComponent => {
  return props => {
    return (
      <>
        <Navbar />
        <div className='mt-[94px]'>
          <WrappedComponent {...props} />
        </div>
      </>
    )
  }
}

export default AppLayout
