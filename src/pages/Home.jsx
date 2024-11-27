import React from 'react'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import AppLayout from '../Layout/AppLayout'

const Home = () => {
  return (
    <div>
      <Banner />
      <Products/>
      <Footer />
    </div>
  )
}

export default AppLayout()(Home)
