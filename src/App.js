import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from "./Components/Main/Main"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"


function App() {
  return (
    <div>
    <nav>
      <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
