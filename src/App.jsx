import React from 'react';
import './App.css';
import { Hero, InfoSection, Footer } from './components';

function App() {

  return (
    <div id="App" className="bg-gray-200">
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App
