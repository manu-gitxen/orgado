import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "./index.css";
import Hero from "./components/Hero";
import ServiceInfo from "./components/ServiceInfo";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import ProductBannerArea from "./components/ProductBannerArea";
import TrendingProducts from "./components/TrendingProducts";

function App() {
  

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ServiceInfo />
      {/* <Contact /> */}
      {/* <Home/> */}
      <ProductBannerArea/>
      <TrendingProducts/>
      <Footer />
    </>
  );
}

export default App;
