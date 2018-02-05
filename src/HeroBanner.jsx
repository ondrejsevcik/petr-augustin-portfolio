import React from 'react'
import Typed from 'typed.js'
import scrollToElement from 'scroll-to-element'


export default class HeroBanner extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'UX.',
        'interactions.',
        'delight.',
        'animations.',
        'services.',
        'products.',
        'apps.',
        'IoT.',
      ],
      typeSpeed: 80,
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

				<div className="hero-banner__img">
					<div className="hero-banner__overlay">
			        <div className="hero-banner__titles">
			          <h1 className="h1 hero-banner__title">
			            Hi, my name is Petr Augustin<span className="hero-banner__dot">.</span>
			          </h1>
			          <h3 className="hero-banner__subtitle">
			            <span className="h3">I design </span>
			            <span
			              className="hero-banner__typed-text"
			              ref={(el) => {
			                this.el = el;
			              }}
			            />
			          </h3>
                <div class="quick-links"><a href="https://www.linkedin.com/in/petr-augustin/" target="_blank">LinkedIn</a>  <a href="https://medium.com/@petraugustin" target="_blank">Medium</a>  <a href="https://twitter.com/PetrAugustin" target="_blank">Twitter</a></div>
							</div>
            <a href="#" onClick={() => scrollToElement("#case-studies", {offset: -80})}>
            <div className="hero-banner__scroll">
							<div className="derp">

									<img src="https://assets.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/dd948e5d-c4e0-4eb6-bac3-75c12872c5ff/arrow-down.svg" className="scroll-button"/>
							</div>
            </div>
            </a>
	        </div>
				</div>

    )
  }
}
