import React from 'react'
import Navbar from './Navbars/Navbar'
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contacts'
import Skills from './Pages/Skills/Skills'
import Project from './Pages/Project/Project';
import Footer from './Navbars/Footer';

function App() {
  return (
    <div>

      <Router>
        <Navbar />
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/contact' element={<Contact/>}/>
         </Routes>
         <Footer/>
      </Router>


    </div>
  )
}

export default App
