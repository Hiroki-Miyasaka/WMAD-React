import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
