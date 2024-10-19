import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products/>
      <Footer />
    </>
  )
}

export default Home
