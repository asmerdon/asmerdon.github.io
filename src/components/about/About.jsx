import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import CV from '../../assets/cv.pdf'
import { FaAward, FaPen } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h1 className="section__title">About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="Alexander Smerdon" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Qualifications</h5>
              <ul>
                <li>MSc in Data Science from King's College London</li>
                <li>BSc in Computer Science from Cardiff University</li>
              </ul>
            </article>

            <article className="about__card">
              <BsBriefcaseFill className="about__icon" />
              <h5>Work Experience</h5>
              <ul>
                <li>2 years working full time as a Technical Consultant (Virtusa)</li>
                <li>Graduate Data Scientist at First Central</li>
              </ul>
            </article>

            <article className="about__card">
              <FaPen className="about__icon" />
              <h5>Skills</h5>
              <p className="about__card-text">Python, TensorFlow, SQL, JavaScript, NumPy, Seaborn, BeautifulSoup, Selenium, Excel, R, MongoDB, Apache Spark, QGIS</p>
            </article>
          </div>

          <p className="about__intro">
            Hello, I am Alex! I'm a Data Scientist and Software Developer based in London / Haywards Heath.
          </p>

          <div className="about__cta">
            <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View CV</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
