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
import scrollToElement from 'scroll-to-element'
import Gallery from './Gallery'


let navigationLinks = [
  {title: 'Case studies', path: '#case-studies'},
  {title: 'Experience', path: '#experience'},
  {title: 'About me', path: '#about-me'},
];

let App = () => (
  <Router>
    <div className="container-fluid">
      <div className="nav__sticky" sm-hidden>
        <header className="align-items-center">


          <div className="header__wrapper">
            <div className="header__title">
              <Link to="/" className="header__link">
                Petr Augustin
              </Link>
            </div>
            <div className="header__subtitle">
              UX, Product and Interaction designer
            </div>
          </div>



          <nav className="nav">
            {navigationLinks.map(item =>
              <NavLink
                key={item.path}
                to={item.path}
								onClick={() => scrollToElement(item.path, {offset: -80})}
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
