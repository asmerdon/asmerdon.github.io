import React from 'react'
import './portfolio.css'

import IMG_HEARTBEATS from '../../assets/heartbeats.png'
import IMG_DISS from '../../assets/disspic.PNG'
import IMG_CALIFORNIA from '../../assets/california.PNG'
import IMG_UK from '../../assets/uk.PNG'
import IMG_SVM from '../../assets/svmimage.png'
import IMG_TWITTER from '../../assets/twitter.PNG'
import IMG_STOCK from '../../assets/stock.jpg'
import IMG_TRACKING from '../../assets/peopletracking.jpg'
import IMG_SATELLITE from '../../assets/satelliteportfolio.PNG'
import IMG_TRUESIZE from '../../assets/truesizeof.jpg'

import PDF_DISS_MSC from '../../assets/dissertationmsc.pdf'
import PDF_DISS_BSC from '../../assets/dissertationbsc.pdf'
import PDF_STATS from '../../assets/statscw.pdf'
import PDF_DATAVIS from '../../assets/datavis.pdf'
import PDF_SVM from '../../assets/svm.pdf'

const projects = [
  {
    image: IMG_DISS,
    title: 'Urban Inequalities in North East London (MSc Dissertation)',
    links: [
      { label: 'Report', href: PDF_DISS_MSC },
      { label: 'GitHub', href: 'https://github.com/asmerdon/Urban-Inequalities-in-NE-London' },
    ],
  },
  {
    image: IMG_SATELLITE,
    title: 'Satellite Imagery Classifier Web App',
    links: [
      { label: 'GitHub', href: 'https://github.com/asmerdon/satellite-classifier-frontend' },
      { label: 'Live Demo', href: 'https://asmerdon.github.io/satellite-classifier-frontend/' },
    ],
  },
  {
    image: IMG_CALIFORNIA,
    title: 'Analysis of Californian Residential Block Housing',
    links: [
      { label: 'Report', href: PDF_STATS },
      { label: 'GitHub', href: 'https://github.com/asmerdon/7CCMMS61-Statistics-for-Data-Analysis-23-24/blob/main/K23031306.R' },
    ],
  },
  {
    image: IMG_HEARTBEATS,
    title: 'Heartbeats (BSc Dissertation)',
    links: [
      { label: 'Report', href: PDF_DISS_BSC },
      { label: 'GitHub', href: 'https://github.com/asmerdon/Heartbeats' },
    ],
  },
  {
    image: IMG_TRACKING,
    title: 'Facial Recognition and Human Tracking',
    links: [
      { label: 'GitHub', href: 'https://github.com/asmerdon/facial-recognition-and-human-tracking/' },
      { label: 'Video Demo', href: 'https://www.youtube.com/watch?v=C0yPS6Sa9Xs' },
    ],
  },
  {
    image: IMG_UK,
    title: 'UK Regional House Prices Web App',
    links: [
      { label: 'Report', href: PDF_DATAVIS },
      { label: 'Live Demo', href: 'https://k23031306.github.io/' },
    ],
  },
  {
    image: IMG_TWITTER,
    title: 'Twitter / X Web Scraper',
    links: [
      { label: 'GitHub', href: 'https://github.com/asmerdon/Twitter-Scraper' },
    ],
  },
  {
    image: IMG_SVM,
    title: 'Report on Support Vector Machines',
    links: [
      { label: 'Report', href: PDF_SVM },
    ],
  },
  {
    image: IMG_STOCK,
    title: 'Financial Sentiment NLP Approach Comparison',
    links: [
      { label: 'GitHub', href: 'https://github.com/asmerdon/Financial-Sentiment-NLP' },
    ],
  },
  {
    image: IMG_TRUESIZE,
    title: 'True Size Of (Any Location)',
    links: [
      { label: 'GitHub', href: 'https://github.com/asmerdon/true-size-of' },
      { label: 'Live Demo', href: 'https://asmerdon.github.io/true-size-of/' },
    ],
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="section__title">Portfolio</h1>
      <p className="section__subtitle">
        For more, please visit my <a href="https://github.com/asmerdon/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <div className="container portfolio__container">
        {projects.map(({ image, title, links }) => (
          <article key={title} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              {links.map(({ label, href }) => (
                <a key={label} href={href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
