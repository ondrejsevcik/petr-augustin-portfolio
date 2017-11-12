import React, {Component} from 'react'

export default class Portfolio extends Component {
  render() {

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
                Title
              </h1>
            </div>
          </div>
        </section>
        <main className="row">
          <article>
            content...
          </article>
        </main>
      </div>
    )
  }
}
