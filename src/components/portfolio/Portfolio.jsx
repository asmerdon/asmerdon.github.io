import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/heartbeats.png'
import IMG2 from '../../assets/disspic.PNG'
import IMG3 from '../../assets/california.PNG'
import IMG4 from '../../assets/uk.PNG'
import IMG5 from '../../assets/svmimage.png'
import IMG6 from '../../assets/twitter.PNG'
import IMG7 from '../../assets/stock.jpg'
import IMG8 from '../../assets/snowflake.png'
import IMG9 from '../../assets/news.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Portfolio (for more, please visit my GitHub)</h1>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG2} alt=""></img></div>
          <h3> Urban Inequalities in North East London (MSc Dissertation)</h3>
          <div className="portfolio__item-cta">
          <a href={require('../../assets/dissertationmsc.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Report</a>
          <a href='https://github.com/asmerdon/Urban-Inequalities-in-NE-London' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG3} alt=""></img></div>
          <h3>Analysis of Californian Residential Block Housing</h3>
          <div className="portfolio__item-cta">
            <a href={require('../../assets/statscw.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Report</a>
            <a href='https://github.com/asmerdon/7CCMMS61-Statistics-for-Data-Analysis-23-24/blob/main/K23031306.R' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG4} alt=""></img></div>
          <h3>UK Regional House Prices Web App</h3>
          <div className="portfolio__item-cta">
          <a href={require('../../assets/datavis.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Report</a>
            <a href='https://k23031306.github.io/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG1} alt=""></img></div>
          <h3>Heartbeats (BSc Dissertation)</h3>
          <div className="portfolio__item-cta">
            <a href={require('../../assets/dissertationbsc.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Report</a>
            <a href='https://github.com/asmerdon/Heartbeats' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG5} alt=""></img></div>
          <h3>Report on Support Vector Machines</h3>
          <div className="portfolio__item-cta">
          <a href={require('../../assets/svm.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Report</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG6} alt=""></img></div>
          <h3>Twitter / X Web Scraper</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/asmerdon/Twitter-Scraper' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG8} alt=""></img></div>
          <h3>Snowflake Pipeline</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/asmerdon/Snowflake-CSV-Pipeline' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG9} alt=""></img></div>
          <h3>Fake News Article Detection Model</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/asmerdon/ML-Fake-News-Detection-' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"><img src={IMG7} alt=""></img></div>
          <h3>Financial Sentiment NLP Approach Comparison</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/asmerdon/Financial-Sentiment-NLP' className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio