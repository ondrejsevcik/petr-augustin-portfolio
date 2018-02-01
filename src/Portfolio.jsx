import React, { Component } from 'react'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Slug comes from React-router
      slug: props.match.params.slug,
      item: {
        elements: {
          title: { value: '' },
          headline_image: { value: [{ url: '' }] },
          project_description: { value: '' },
        }
      }
    }
  }

  componentDidMount() {
    let url = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.codename=' + this.state.slug;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ item: response.items[0] })
      })
  }

  render() {
    let item = {
      title: this.state.item.elements.title.value,
      headlineImage: this.state.item.elements.headline_image.value[0].url,
      htmlContent: this.state.item.elements.project_description.value,
    }

    return (
      <div>

        <div className="col-12 portfolio__title" style={{backgroundImage: `url(${item.headlineImage})`,}}>
          <div className="hero-banner__overlay">
              <div className="">
                <h1>{item.title}</h1>
              </div>  
          </div>
        </div>
        <main className="portfolio-main">
          <article className="portfolio__content col-12" dangerouslySetInnerHTML={{ __html: item.htmlContent}}>
          </article>
        </main>
      </div>
    )
  }
}
