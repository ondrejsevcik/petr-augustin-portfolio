import React, {Component} from 'react'
import HeroBanner from './HeroBanner'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    let url = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.type=portfolio_item&elements=title,headline_image';

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json.items });
      })
  }

  render() {
    let articles = this.state.items.map(item => ({
      title: item.elements.title.value,
      headlineImage: item.elements.headline_image.value[0].url,
      url: 'portfolio/' + item.system.codename,
    }));

    return (
      <div>
        <section
          className="row hero-banner"
        >
          <HeroBanner />
        </section>
        <main className="row">
          {articles.map(a =>
            <div
              key={a.url}
              className="col-xs-12 col-md-6"
            >
              <Link
                to={a.url}
                className="article"
                style={{
                  backgroundImage: `url(${a.headlineImage})`,
                }}
              >
                <h1 className="article__title">
                  {a.title}
                </h1>
              </Link>
            </div>
          )}
        </main>
      </div>
    )
  }
}
