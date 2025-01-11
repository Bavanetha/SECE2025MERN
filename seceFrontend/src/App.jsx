import { useState } from 'react'
import './App.css'
import Home from "./components/FunctionalComponents/Home";
import NavBar from "./components/FunctionalComponents/NavBar";
import Hero from "./components/FunctionalComponents/Hero";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Footer from "./components/FunctionalComponents/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
