import React from 'react';
import './styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul>
        <li>Programming Languages:</li>
        <ul>
          <li>C</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
        <li>Web Development:</li>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Basic JavaScript</li>
          <li>Basic React</li>
        </ul>
        <li>Databases:</li>
        <ul>
          <li>SQL</li>
        </ul>
      </ul>
    </section>
  );
};

export default Skills;