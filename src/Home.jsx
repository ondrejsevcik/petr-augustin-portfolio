import React, {Component} from 'react'
import HeroBanner from './HeroBanner'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {

    let articles = [
      {
        image: 'http://petraugustin.com/wp-content/uploads/2017/10/final5.png',
        title: 'Weather & fuel aircraft app',
        url: '/portfolio/weather',
      },
      {
        image: 'http://petraugustin.com/wp-content/uploads/2017/09/hero-image-botanica.png',
        title: 'Botanica – IoT app for smart gardening',
        url: '/portfolio/botanica/',
      },
      {
        image: 'http://petraugustin.com/wp-content/uploads/2017/09/hero-image-botanica.png',
        title: 'Dummy article with some text in it',
        url: '/portfolio/botanica2/',
      },
    ]

    return (
      <div>
        <section
          className="row hero-banner"
        >
          <HeroBanner />
        </section>
        <main className="row">
          {articles.map(a =>
            <Link to={a.url} className="article animated fadeInUp col-xs-12 col-md-6" key={a.url}>
              <img
                className="article__image"
                src={a.image}
              />
              <h1 className="article__title">
                {a.title}
              </h1>
            </Link>
          )}
        </main>
      </div>
    )
  }
}
