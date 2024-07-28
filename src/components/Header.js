import React, { useState } from 'react';
import './styles/Header.css';
import Projects from './Projects'; // Import the Projects component
import Contact from './Contact'; // Import the Contact component

const Header = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleViewWorkClick = () => {
    setShowProjects(true);
    setShowContact(false);
  };

  const handleHireMeClick = () => {
    setShowContact(true);
    setShowProjects(false);
  };

  return (
    <header>
      <div className="header-content">
        <h1>Akale</h1>
        <p>HELLO!</p>
        <h2>I Am Mahadev Akale</h2>
        <p>I'm a Web Devloper</p>
        <button onClick={handleViewWorkClick}>View Work</button>
        <button onClick={handleHireMeClick}>Hire Me</button>
        {showProjects && <Projects />}
        {showContact && <Contact />}
      </div>
      <div className="image-container">
        <img src="https://media.licdn.com/dms/image/D4D03AQF1l-loX3NLtg/profile-displayphoto-shrink_800_800/0/1721062511667?e=1727308800&v=beta&t=6nb4aic3NDvhOOoEXQtQG4sGVk-9P_PLkZsedPkVjTw" alt="Your Image" />
      </div>
    </header>
  );
};

export default Header;