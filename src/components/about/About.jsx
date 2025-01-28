import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaPen} from 'react-icons/fa'
import CV from '../../assets/cv.pdf'
import {BsChevronDoubleDown} from 'react-icons/bs'

const About = () => {
  return (
    <section id = 'about'>
      <div className='about__title'>
        <h1>About Me</h1>
      </div>
      <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="About Image" style={{ width: '60%', height: 'auto' }} />
            </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Qualifications</h5>
              <small>
                <ul>
                  <li>MSc in Data Science from King's College London</li>
                  <li>BSc in Computer Science from Cardiff University</li>
                </ul>
              </small>
            </article>

            <article className='about__card'>
              <BsBriefcaseFill className='about__icon'/>
              <h5>Work Experience</h5>
              <small>2 Years Working Full Time as a Technical Consultant (Virtusa)</small>
            </article>

            <article className='about__card'>
              <FaPen className='about__icon'/>
              <h5>Skills</h5>
              <small>Python, Tensorflow, SQL, JavaScript, Numpy, Seaborn, BeautifulSoup, Selenium, Excel, R, MongoDB, Apache Spark, QGIS </small>
            </article>
          </div>
          <p>Hello, I am Alex! I am a recent Data Science graduate based in London currently looking for a new role.</p>
          <div className='cta'>
          <a href={require('../../assets/cv.pdf')} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>View CV</a>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
          <a href="#contact" className='scroll__down'><BsChevronDoubleDown size={40}/></a>
        </div>
      </div>
    </section>
  )
}

export default About