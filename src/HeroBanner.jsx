import React from 'react'
import Typed from 'typed.js'

export default class HeroBanner extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'UX',
        'interactions',
        'delight',
        'animations',
        'user interfaces',
        'products',
        'apps',
        'IoT',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="col-12 hero-banner__wrapper">
        <img
          className="hero-banner__img"
          src="http://petraugustin.com/wp-content/uploads/2017/02/cropped-st3-1.png"
        />
        <div className="hero-banner__titles">
          <h1 className="h1 hero-banner__title">
            My name is Petr Augustin<span className="hero-banner__dot">.</span>
          </h1>
          <h2 className="hero-banner__subtitle">
            <span className="h2">I design </span>
            <span
              className="hero-banner__typed-text"
              ref={(el) => { this.el = el; }}
            />
          </h2>
        </div>
      </div>
    )
  }
}
