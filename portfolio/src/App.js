import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <Sobre />
        <Skills />
        <Services />
      </main>

    </>
  );
}

export default App;
