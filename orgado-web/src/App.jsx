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
import { Routes, Route } from "react-router-dom";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
