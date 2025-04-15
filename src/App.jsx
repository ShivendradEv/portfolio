import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import RotateDevice from './components/RotateDevice/RotateDevice'
import { useMobileLandscape } from './util/useMobileLandscape'

function App() {
  const isMobileLandscape = useMobileLandscape();
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {isMobileLandscape && <RotateDevice />}
    </>
  )
}

export default App
