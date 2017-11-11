import React, {Component} from 'react';

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
    ];

    return (
      <div>
        <section
          className="row hero-banner"
        >
          <div className="col-12 hero-banner__wrapper">
            <img
              className="hero-banner__img"
              src="http://petraugustin.com/wp-content/uploads/2017/02/cropped-st3-1.png"
            />
            <div className="hero-banner__titles">
              <h1 className="hero-banner__title">
                My name is Petr Augustyn<span className="hero-banner__dot">.</span>
              </h1>
              <h2>I design ...</h2>
            </div>
          </div>
        </section>
        <main className="row">
          {articles.map(a =>
            <article className="col-6">
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
    );
  }
}
