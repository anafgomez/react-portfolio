import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <Sobre />
      </main>

    </>
  );
}

export default App;
