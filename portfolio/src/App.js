import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <Sobre />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>

    </>
  );
}

export default App;
