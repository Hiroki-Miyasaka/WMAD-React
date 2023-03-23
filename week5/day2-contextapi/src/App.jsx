import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import './App.css'

function App() {

  const [ theme, setTheme ] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contact" element={<Contact />}/>
         </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
