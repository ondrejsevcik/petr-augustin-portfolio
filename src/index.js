import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
// include fetch polyfill
import 'whatwg-fetch'
import './App.css';
import Home from './Home'
import Portfolio from './Portfolio'

let navigationLinks = [
  {title: 'Case studies', path: '#case-studies'},
  {title: 'Experience', path: '#experience'},
  {title: 'About me', path: '#about-me'},
];

let App = () => (
  <Router>
    <div className="container">
      <div className="nav__sticky">
        <header className="row align-items-center">

          <div className="col-6">
            <h1 className="header__title">
              <Link to="/" className="header__link">
                Petr Augustin
              </Link>
            </h1>
            <h2 className="header__subtitle">
              UX, Product and Interaction designer
            </h2>
          </div>
          <nav className="nav col-6">
            {navigationLinks.map(item =>
              <NavLink
                key={item.path}
                to={item.path}
                className="nav__link"
                activeClassName="nav__link--active"
              >
                {item.title}
              </NavLink>
            )}
          </nav>
        </header>
      </div>

      <Route exact path="/" component={Home}/>
      <Route path="/portfolio/:slug" component={Portfolio}/>
    </div>
  </Router>
)


ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
