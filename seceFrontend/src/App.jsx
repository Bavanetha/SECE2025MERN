import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./components/FunctionalComponents/Home";
import NavBar from "./components/FunctionalComponents/NavBar";
import Hero from "./components/FunctionalComponents/Hero";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Footer from "./components/FunctionalComponents/Footer";
import SignUp from "./components/FunctionalComponents/SignUp";

import ClassCompExe from "./components/classComponents/ClassCompExe";
import Gallery from "./components/FunctionalComponents/Gallery";
import ContactState from './components/FunctionalComponents/ContactState';

function App() {

  return (

      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path = "/"  element = {<Home/>}></Route>
            <Route path = "/about"  element = {<About/>}></Route>
            <Route path = "/gallery"  element = {<Gallery image="chocolate" page="gallery"/>}></Route>
            <Route path = "/contact"  element = {<Contact/>}></Route>
            <Route path="/class" element = {<ClassCompExe />} />
            <Route path = "/signup" element = {<SignUp/>} />
        </Routes>
      </BrowserRouter>
     
      
    
  )
}

export default App
