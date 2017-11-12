import React, {Component} from 'react'

export default class CaseStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        items: [],
      },
    }
  }

  componentDidMount() {
    let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@petraugustin';
    fetch(url ,{
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts })
      })
  }

  render() {
    let mediumPosts = this.state.posts.items.map(post =>
      <a href={post.link} target="_blank" key={post.guid}>
        <h2>{post.title}</h2>
      </a>
    )

    return (
      <div>
        <h1>My articles on Medium</h1>
        <p>I try to publish as much as I can. I’m active on Medium and also do talks on UX design locally. Check out some of my articles right here.</p>
        {mediumPosts}
      </div>
    )
  }
}
