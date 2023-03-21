import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar"
import ListPage from "./pages/ListPage/ListPage";
import Profile from "./pages/Profile/Profile";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:id" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
