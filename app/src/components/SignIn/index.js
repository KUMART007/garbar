import React from 'react';
import logo from '../../logo.svg';
import './App.css';

function SignIn() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sign In Page.
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

export default SignIn;