import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
      <Footer />
    </div>
      
  );
}

export default App;