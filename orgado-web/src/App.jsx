import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TopBar from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopBar/>
      <Header/>
      
    </>
  )
}

export default App
