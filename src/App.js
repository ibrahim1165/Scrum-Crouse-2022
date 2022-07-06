import React from 'react';
import './App.css';
import Header from './Pages/Home/Header';
import Services from './Pages/Service/Services';
import Navbar from './Pages/Shered/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
    </div>
  );
}

export default App;
