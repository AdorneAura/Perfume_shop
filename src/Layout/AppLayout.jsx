import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const AppLayout = () => WrappedComponent => {
  return props => {
    return (
      <>
          <Navbar />
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default AppLayout
