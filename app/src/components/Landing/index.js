import React from 'react';
import logo from '../../logo.svg';
import './App.css';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comming Soon The Gar Bar A Speakeasy Grilling Drinks and BBQ will soon Begin.
        </p>
        <a
          className="App-link"
          href="https://www.thegarbaraspeakeasy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gar Bar 
        </a>
      </header>
    </div>
  );
}

export default Landing;