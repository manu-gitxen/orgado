import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import './index.css'
import Hero from './components/Hero'
import ServiceInfo from './components/ServiceInfo'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopBar/>
      <Header/>
      <Hero/>
      <ServiceInfo />
      <Footer/>
      
    </>
  )
}

export default App
