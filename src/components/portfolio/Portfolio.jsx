import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/heartbeats.png'
import IMG2 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Portfolio</h1>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG1} alt=""></img></div>
          <h3>Heartbeats</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/asmerdon/asmerdon.github.io' className='btn btn-primary' target='_blank'>GitHub</a>
            <a href='https://asmerdon.github.io/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG2} alt=""></img></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/' className='btn btn-primary' target='_blank'>GitHub</a>
            <a href='https://github.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio