import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ana Gomez</h3>
            <p>Desenvolvedora Web</p>
          </div>
          
          <div className="footer-links">
            <button onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
              Serviços
            </button>
           {/* <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Portfolio
            </button>*/}
            <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Contato
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; Ana Gomez. Todos os direitos reservados</p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
