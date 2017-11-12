import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Portfolio from './Portfolio'


let App = () => (
  <Router>

    <div className="container-fluid">
      <header className="row align-items-center">
        <div className="col-6 justify-content-start">
          <h1 className="header__title">
            <a href="/">Petr Augustin</a>
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

      <Route exact path="/" component={Home} />
      <Route path="/portfolio/:slug" component={Portfolio} />

    </div>
  </Router>
)



ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
