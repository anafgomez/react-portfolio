import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Qualificacoes from './components/Qualificacoes';
import Servicos from './components/Servicos';
/*import Portfolio from './components/Portfolio';*/
import Contato from './components/Contato';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Skills />
      <Qualificacoes />
      <Servicos />
      {/*<Portfolio />*/}
      <Contato />
      <Footer />
    </div>
  );
};

export default App;
