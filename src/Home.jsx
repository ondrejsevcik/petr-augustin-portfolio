import React, { Component } from 'react'
import HeroBanner from './HeroBanner'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleItems: [],
      cvSectionWithModularContent: null,
      aboutMeItem: null,
      socialSectionItem: null,
    }
  }

  componentDidMount() {
    let articlesUrl = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.type=portfolio_item&elements=title,headline_image';

    fetch(articlesUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({articleItems: json.items});
      });

    let cvSectionUrl = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.codename=cv_section';
    fetch(cvSectionUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({
          cvSectionWithModularContent: json,
        })
      });

    let aboutMeUrl = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.codename=about_me_section';
    fetch(aboutMeUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({aboutMeItem: json.items[0]})
      });

    let socialSectionUrl = 'https://deliver.kenticocloud.com/393dbc5f-df9c-4c02-aabc-f5a733cffdcc/items?system.codename=social_section';
    fetch(socialSectionUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({socialSectionItem: json.items[0]})
      });
  }

  render() {
    let articles = this.state.articleItems.map(item => ({
      title: item.elements.title.value,
      headlineImage: item.elements.headline_image.value[0].url,
      url: 'portfolio/' + item.system.codename,
    }));

    let cvSectionWithModularContent = this.state.cvSectionWithModularContent;
    let cvSection = {};
    let cvParts = [];

    if (cvSectionWithModularContent) {
      cvSection = {
        title: cvSectionWithModularContent.items[0].elements.title.value,
        paragraph: cvSectionWithModularContent.items[0].elements.leading_paragraph.value,
      };

      cvParts = cvSectionWithModularContent.items[0].elements.cv_part.value.map(codeName => ({
        icon: cvSectionWithModularContent.modular_content[codeName].elements.icon.value[0].url,
        year: cvSectionWithModularContent.modular_content[codeName].elements.year.value,
        job: cvSectionWithModularContent.modular_content[codeName].elements.job.value,
        title: cvSectionWithModularContent.modular_content[codeName].elements.title.value,
        description: cvSectionWithModularContent.modular_content[codeName].elements.description.value,
      }));
    }

    let aboutMeItem = this.state.aboutMeItem;
    let aboutMe = {};
    if (aboutMeItem) {
      aboutMe = {
        title: aboutMeItem.elements.title.value,
        photoUrl: aboutMeItem.elements.photo.value[0].url,
        photoDescription: aboutMeItem.elements.photo.value[0].description,
        paragraph: aboutMeItem.elements.paragraph.value,
        subtitle: aboutMeItem.elements.subtitle.value,
      };
    }

    let socialSectionItem = this.state.socialSectionItem;
    let socialSection = {};
    if (socialSectionItem) {
      socialSection = {
        title: socialSectionItem.elements.title.value,
        paragraph: socialSectionItem.elements.paragraph.value,
      };
    }

    return (
      <div>
        <section
          className="row hero-banner"
        >
          <HeroBanner/>
        </section>

        <h2 id="#case-studies">
          My favourite case studies
        </h2>
        <main className="row">
          {articles.map(a =>
            <div
              key={a.url}
              className="col-xs-12 col-md-4"
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

        <h2 id="experience">{cvSection.title}</h2>
        <p>{cvSection.paragraph}</p>
        {cvParts.map(cvPart =>
          <div className="row">
            <div className="col-md-5">
              {cvPart.year} - {cvPart.job}
            </div>
            <div className="col-md-7">
              {cvPart.description}
            </div>
          </div>
        )}

        <h2 id="about-me">{aboutMe.title}</h2>
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={aboutMe.photoUrl} alt={aboutMe.photoDescription}/>
          </div>
          <div className="col-md-8" dangerouslySetInnerHTML={{__html: aboutMe.paragraph}}>
          </div>
        </div>

        <h3>{aboutMe.subtitle}</h3>
        <div className="row">
          {/* TODO add medium articles here */}
        </div>
        <a href="https://medium.com/@petraugustin" target="_blank" rel="noopener noreferrer">
          And you love to read? Here's all my Medium stories...
        </a>

        <h2 id="social">{socialSection.title}</h2>
        <div className="row">
          <p
            className="col-md-8 social-section__paragraph"
            dangerouslySetInnerHTML={{__html: socialSection.paragraph}}>
          </p>
        </div>
      </div>
    )
  }
}
