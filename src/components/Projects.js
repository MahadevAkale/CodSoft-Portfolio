import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project">
          <h3>Sentiment Analysis using Colab in Python</h3>
          <p>
            This project uses natural language processing (NLP) techniques to analyze text data and determine the sentiment behind it. I utilized Google Colab to develop and train a machine learning model using Python.
          </p>
          <p>
            The project involved data preprocessing, feature extraction, and model training using popular libraries like NLTK, spaCy, and scikit-learn. I achieved an accuracy of 85% on the test dataset.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;