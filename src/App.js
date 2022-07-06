import React from 'react';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
