import { useState } from 'react'
import './App.css'
import Home from "./components/FunctionalComponents/Home";
import NavBar from "./components/FunctionalComponents/NavBar";
import Hero from "./components/FunctionalComponents/Hero";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Footer from "./components/FunctionalComponents/Footer";

import ClassCompExe from "./components/classComponents/ClassCompExe";
import Gallery from "./components/FunctionalComponents/Gallery";

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <ClassCompExe/>
      <Gallery/>
    </>
  )
}

export default App
