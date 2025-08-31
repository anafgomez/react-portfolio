import React from 'react';
import './Sobre.css';

const Sobre: React.FC = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Dev-AnaGomez.pdf';
    link.download = 'CV-Dev-Ana-Gomez.pdf';
    link.click();
  };

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <p>Desenvolvedora Web Júnior</p>
        </div>
        
        <div className="sobre-content">
          <div className="sobre-text">
            <p>
              Olá! Sou <strong>Ana Flávia Gomez</strong>, uma desenvolvedora web apaixonada por criar soluções 
              inovadoras e eficientes. Com formação em Ciências Sociais pela UFSCar e especialização em 
              Desenvolvimento Web FullStack, combino uma visão humanizada com habilidades técnicas sólidas.
            </p>
            
            <p>
              Minha jornada na tecnologia começou em 2021 através do bootcamp da Labenu, onde desenvolvi 
              projetos práticos e adquiri conhecimentos em JavaScript, React, Typescript, Node.js e SQL. Desde então, 
              tenho trabalhado em projetos que envolvem automação de processos, integração de APIs e 
              desenvolvimento de aplicações web responsivas.
            </p>

            <div className="sobre-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-text">Anos de Experiência</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Projetos Desenvolvidos</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Tecnologias Dominadas</span>
              </div>
            </div>

            <div className="sobre-actions">
              <button className="download-cv-btn" onClick={downloadCV}>
                <i className="fas fa-download"></i>
                Download CV
              </button>
              <a href="#contato" className="contact-btn">
                <i className="fas fa-envelope"></i>
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="sobre-image">
            <img 
              src="/profile.jpg" 
              alt="Ana Gomez - Desenvolvedora Web" 
              className="profile-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Ana Flávia Gomez</h3>
                <p>Desenvolvedora Web Júnior</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ana-flavia-gomez" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/anafgomez" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
