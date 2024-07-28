import React from 'react';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {
  return (
    <div className="container">
      
      <Navbar />
      <Intro />
      
    </div>
  );
};

export default App;