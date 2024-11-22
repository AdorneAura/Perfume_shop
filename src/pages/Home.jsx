import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import AppLayout from '../Layout/AppLayout'

const Home = () => {
  return (
    <>
      <Banner />
      <Products/>
      <Footer />
    </>
  )
}

export default AppLayout()(Home)
