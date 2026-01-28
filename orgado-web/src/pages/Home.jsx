import React from 'react'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'
import ServiceInfo from '../components/ServiceInfo'
import ProductBannerArea from "../components/ProductBannerArea";
import TrendingProducts from "../components/TrendingProducts";
import BrowseCatg from '../components/BrowseCatg'
import FlashSaleSection from '../components/FlashSaleSection'
import FeaturedSection from '../components/FeaturedSection'
import BrandScroller from '../components/BrandScroller'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <ServiceInfo />
      <ProductBannerArea />
      <TrendingProducts />

      <BrowseCatg />
      <FlashSaleSection />
      <FeaturedSection />
      <BrandScroller />
    </div>
  )
}

export default Home
