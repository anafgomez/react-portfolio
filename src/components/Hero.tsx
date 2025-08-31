import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Oi! Eu sou a <span className="highlight">Ana</span>
          </h1>
          <h2 className="hero-subtitle">Desenvolvedora Web</h2>
          <p className="hero-description">
            Possuo experiência em frontend, backend e desenvolvimento de software. 
            Além disso, procuro sempre prezar pelo conceito de clean code nos meus trabalhos.
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Entre em contato
          </button>
        </div>
        
        <div className="scroll-indicator" onClick={scrollDown}>
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
