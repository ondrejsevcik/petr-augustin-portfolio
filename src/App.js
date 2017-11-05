import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="row align-items-center">
          <div className="col-6 justify-content-start">
            <h1 className="header__title">
              Petr Augustyn
            </h1>
            <h2 className="header__subtitle">
              UX, Product and Interaction designer
            </h2>
          </div>
          <nav className="col-6 justify-content-end">
            <a href="/my-designs" className="nav__link">
              My designs
            </a>
            <a href="/contact" className="nav__link">
              Let's talk
            </a>
            <a href="/published-on-medium" className="nav__link">
              Published on Medium
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
