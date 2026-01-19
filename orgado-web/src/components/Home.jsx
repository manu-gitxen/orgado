import React from 'react'
import Header from './Header'
import TopBar from './TopBar'
import Hero from './Hero'
import ServiceInfo from './ServiceInfo'
import ProductBannerArea from "./ProductBannerArea";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Hero/>
      <ServiceInfo/>
      <ProductBannerArea/>
      <TrendingProducts/>
    </div>
  )
}

export default Home
