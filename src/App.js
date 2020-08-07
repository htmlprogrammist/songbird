import React from 'react';
import './App.css';
import Question from './components/Question';
import Options from './components/Options';
import AboutBird from './components/AboutBird';
import CtrlKey from './components/CtrlKey';
import Header from './components/Header'

function App() {
  return (
    <main>
      <Header />
      <Question />
      <Options />
      <AboutBird />
      <CtrlKey />
    </main>
  );
}

export default App;
