import React from 'react';
import './App.css';
import Hero from './Pages/Hero/Hero';
import Header from './Pages/Home/Header';
import Services from './Pages/Service/Services';
import Navbar from './Pages/Shered/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Hero />
    </div>
  );
}

export default App;
