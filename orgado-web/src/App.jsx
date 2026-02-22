import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "./index.css";
import Hero from "./components/Hero";
import ServiceInfo from "./components/ServiceInfo";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ListedProducts from "./pages/ListedProducts";
import TrackOrder from "./pages/TrackOrder";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      {/* <TopBar /> */}
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <ServiceInfo /> */}
      {/* <Contact /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UserAccount" element={<UserAccount />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ListedProducts" element={<ListedProducts />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
