import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/FunctionalComponents/Home";
import NavBar from "./components/FunctionalComponents/NavBar";
import About from "./components/FunctionalComponents/About";
import Contact from "./components/FunctionalComponents/Contact";
import Footer from "./components/FunctionalComponents/Footer";
import SignUp from "./components/FunctionalComponents/SignUp";
import Login from "./components/FunctionalComponents/Login";
import Gallery from "./components/FunctionalComponents/Gallery";
import ClassCompExe from "./components/classComponents/ClassCompExe";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <NavBar onLogout = {handleLogout}/>}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
