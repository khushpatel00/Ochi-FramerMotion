import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';
import Marquee from './Components/Marquee.jsx';
import About from './Components/About.jsx';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll();

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
    </div>
  )
}

export default App
