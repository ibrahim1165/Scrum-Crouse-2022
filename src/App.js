import React from 'react';
import './App.css';
import Hero from './Pages/Hero/Hero';
import Header from './Pages/Home/Header';
import Services from './Pages/Service/Services';
import Navbar from './Pages/Shered/Navbar';
import Testomonial from './Pages/Testomonial/Testomonial';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Hero />
      <Testomonial />
    </div>
  );
}

export default App;
