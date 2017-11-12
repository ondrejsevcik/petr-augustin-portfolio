import React, {Component} from 'react'
import HeroBanner from './HeroBanner'

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
      }
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
            <article key={a.url} className="col-6">
              <a href={a.url} className="article__link">
                <img
                  className="article__image"
                  src={a.image}
                />
                <h1>{a.title}</h1>
              </a>
            </article>
          )}
        </main>
      </div>
    )
  }
}
