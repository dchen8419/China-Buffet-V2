import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About'
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </div>
      
  );
}

export default App;