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
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {isMobileLandscape && <RotateDevice />}
      {isVisible && (
        <button type='button' onClick={scrollToTop} className="scroll-top">
          <img src='/portfolio/chevron-up-outline.png' alt='chevron up outline' />
        </button>
      )}
    </>
  )
}

export default App
