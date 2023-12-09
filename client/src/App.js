import React, { useState, useEffect } from 'react';
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Ventures from './components/pages/Ventures';
import KHUB from './components/pages/KHUB';
import Registration from './components/pages/Registration';
import Footer from './components/pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import InternList from './components/InternList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
 
      <Routes>
       
        <Route path="/" element={<>
          <Navbar />
          <Hero />
          <About />
          <Ventures />
          <KHUB />
          <Registration />
          <Footer />
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<InternList />} />
      </Routes>
   
  );
}

export default App;
