import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {

    return (
      <div>
        <div className="row">
          <h1 className="col-12 portfolio__title">
            Botanica – IoT app for smart gardening
          </h1>
        </div>
        <main className="row">
          <article className="col-12">

            <h1>Project Summary</h1>
            <p>In 2017, I designed an app with a few friends that tackled a common problem that we wanted to
              explore—<b>busy professionals completely forget to take regular care of their houseplants</b>. We wanted
              to go beyond what we normally work on and brainstorm a project that had no limits; that could be doable
              when the technology eventually catches up.</p>

            <p><img className="alignnone size-full wp-image-1048"
                    src="http://petraugustin.com/wp-content/uploads/2017/09/botanica-photo.png"/></p>
            <h2>Goals and challenges</h2>
            <p>After the initial research (We did a survey of our friends and coworkers and invited a couple of them
              to chat over a coffee), we had our problem definition and a few answers:</p>
            <p><b>Keeping plants alive and growing is a problem for young, productive people living in apartments
              because their lives are really fast. When they notice the plant is dying it’s usually too late.</b></p>
            <p>Common reasons why plants die were:</p>
            <ul>
              <li>We forget to water them</li>
              <li>We water the plant when it’s already watered</li>
              <li>We put it in a bad spot and the plant doesn’t get appropriate light</li>
              <li>We completely forget that a plant exists and notice it when it’s dead</li>
            </ul>
            <p>In a next design studio, we realized we need to find the answer to the following questions:</p>
            <ul>
              <li>How do we keep <b>reminding</b> us that our plants exist?</li>
              <li>How could the plant <b>ask</b> for what it needs?</li>
              <li>How to help us <b>identify</b> the correct spot for any plant?</li>
            </ul>

            <h2>Brainstorming different solutions</h2>
            <p>After exploring the daily habits of our colleagues and friends in a set of interviews, we noticed that
              an important part of their routine is checking their phones for social and messaging notifications.
              Pretty much every chance they get!</p>
            <p>What if we were to design a system that gets the data from each plant somehow notifies us about it on
              our phones? </p>
            <p>We went through a couple of quick iterations to work out the details. First, we timeboxed a Crazy
              Eights exercise and came up with a lot of different ways to tackle to initial problem definition. These
              included some very varied ideas like building an AI chatbot assistant, automating the whole watering
              process or gamifying the whole gardening process.</p>
            <p>We decided on designing an app &amp; a hardware sensor that would use keep track of how your plants are
              doing and then let them send you a message on their needs.</p>

            <p><img src="http://petraugustin.com/wp-content/uploads/2017/11/story.png"/></p>

            <h2>Prototyping and usability testing</h2>
            <p>After we have agreed on the solution, we used Indigo Studio to prototype Jobs to be done scenarios that
              we could use to validate our concept. We did an initial testing with 5 participants. It was
              pretty clear our users wanted a more concise view of how their plants are doing. They didn’t care very
              much about the individual plant statistics. We iterated towards a simpler circular indicator and a to-do
              list of tasks each plant want. Everyone was excited about the individual messages and understood well
              what they meant and what they were supposed to do.</p>

            <p><img src="http://petraugustin.com/wp-content/uploads/2017/09/wireframes.png"/></p>
            <p>After revising the prototype, we did another quick round to confirm the changes with 3 participants.
              Everything went reasonably well, except for some interactions like checking out the To-do list for each
              garden.</p>

            <p><img src="http://petraugustin.com/wp-content/uploads/2017/09/wireframes2.png"/></p>
            <p>I used Sketch and Flinto to go from wireframe prototype to high-fidelity prototype, adding a few
              micro-interactions and better graphic design.</p>
            <p><img src="http://petraugustin.com/wp-content/uploads/2017/09/botanica-export.gif"/></p>

            <h2>The solution</h2>
            <p><em>7:00 AM, not-so-distant future.</em></p>
            <p>You slowly wake up, as your smart house unit slowly opens the window blinders and starts your tea.</p>
            <p>After a shower, you glance across your beautiful, spacious apartment. All white walls and forest of
              plants all around. There’s a string of cacti on the shelves next to the window, huge houseplants
              towering in your living room and fragrant herbs on the windowsill.</p>
            <p>As you unlock your phone to check out social media, you notice you already notice you have
              <strong>messages from your plants</strong>, that make sure you don’t forget to <strong>water the
                plants</strong> in the bedroom. All the values for your little garden look good, except for a
              message you receive from the herbs pot. It reads:</p>
            <p>Lettuce<strong>: Could we get some water, Jenny? </strong></p>
            <p>Herbs ba<em>r:</em><strong> Hey, I heard Lettuce is getting water??</strong></p>
            <p>You water the plants before leaving for work.</p>

            <p><img src="http://petraugustin.com/wp-content/uploads/2017/09/laptop-spread-smaller.gif"/></p>
            <p><a href="https://www.behance.net/gallery/54782051/Botanica-IoT-garden-app-concept">Check out more on
              Botanica interaction design on my Behance.</a></p>

          </article>
        </main>
      </div>
    )
  }
}
