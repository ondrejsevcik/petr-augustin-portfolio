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
        medium: aboutMeItem.elements.medium.value[0].url,
      };
    }

    let socialSectionItem = this.state.socialSectionItem;
    let socialSection = {};
    if (socialSectionItem) {
      socialSection = {
        title: socialSectionItem.elements.title.value,
        paragraph: socialSectionItem.elements.paragraph.value,
        imageUrl: socialSectionItem.elements.social.value[0].url,
        socialDesc: socialSectionItem.elements.social.value[0].description,
      };
    }

    return (

      <div>
        <section
          className="hero-banner"
        >
          <HeroBanner/>
        </section>

				<div class="case-studies-wrapper">
        <h2 id="#case-studies">
          My case studies
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

					<div class="page-spacer">
					<a href="" class="page-link">Want to see more? I worked on all kinds of projects...</a>
					</div>

				</div>
				<div className="cvSection-wrapper">
	        <h2 id="experience">{cvSection.title}</h2>
	        <div className="lead">{cvSection.paragraph}</div>
	        {cvParts.map(cvPart =>
	          <div className="row cv-paragraph">
              <div className="col-sm-2-md-1">
                <img className="cv-icon" src={cvPart.icon} alt={aboutMe.photoDescription}/>
              </div>
              <div className="col-md-3">
	              <div class="cv-year">{cvPart.year}</div>
                <div class="cv-job">{cvPart.job} </div>
                <div class="cv-title">{cvPart.title} </div>
	            </div>
	            <div className="col-md-6 cv-info">
	              {cvPart.description}
	            </div>
	          </div>
	        )}
                <div class="page-spacer">
                <a href="https://www.linkedin.com/in/petr-augustin/" class="page-link-blue" target="_blank">Not enough details? It’s all on my LinkedIn profile…</a>
                </div>
				</div>

				<div className="about-me-wrapper">
	        <h2 id="about-me">{aboutMe.title}</h2>
	        <div className="row">
	          <div className="photo col-md-4">
	            <img className="img-fluid" src={aboutMe.photoUrl} alt={aboutMe.photoDescription}/>
	          </div>
	          <div className="lead col-md-7" dangerouslySetInnerHTML={{__html: aboutMe.paragraph}}>
	          </div>
	        </div>

	        <h3>{aboutMe.subtitle}</h3>
	        <div className="row">
	          {/* TODO add medium articles here */}
	        </div>
          <img className="medium" src={aboutMe.medium}/>

	        <a href="https://medium.com/@petraugustin" class="page-link" target="_blank" rel="noopener noreferrer">
          <br/>
	          Interested in design? Here's all my Medium stories...
	        </a>

	        <h2 id="social">{socialSection.title}</h2>
	        <div className="row">
	          <div
	            className="col-md-8 lead"
	            dangerouslySetInnerHTML={{__html: socialSection.paragraph}}>
	          </div>

	        </div>
          <div>

          <a href={socialSection.socialDesc} target="_blank">
          <img className="social-icon" src={socialSection.imageUrl}/>
          </a>


          </div>
				</div>
        <div className="footer">
          Made with love (and sweat!) using <a href="http://kenticocloud.com" class="page-link-footer" target="_blank">Kentico Cloud platform</a> as a headless CMS by myself and my mate <a href="https://github.com/ondrejsevcik" class="page-link-footer" target="_blank">https://github.com/ondrejsevcik </a>
        </div>
      </div>
    )
  }
}
