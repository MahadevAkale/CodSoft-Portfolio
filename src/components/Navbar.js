import React from 'react';
import './styles/Navbar.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="Home"><Header /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Navbar;