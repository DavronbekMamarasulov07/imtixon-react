import React from 'react'
import AllProducts from '../../components/all_products/AllProducts'
import Banner from '../../components/banner/Banner'
import Servis from '../../components/servis/Servis'
import MostProducts from '../../components/most_products/MostProducts'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Nav from '../../components/nav/Nav'


const Home = () => {
  return (
    <div >
      <Nav/>
      <Hero/>
      <AllProducts/>
      <Banner/>
      <Servis/>
      <MostProducts/>
      <Footer/>
    </div>
  )
}

export default Home
