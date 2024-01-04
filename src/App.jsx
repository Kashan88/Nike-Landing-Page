import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import HeroSection from './Components/HeroSection'
const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App