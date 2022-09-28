import React from 'react'
import './about.css'
import ME from '../../assets/linkedin.jfif'
import {FaAward} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
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
              <img src={ME} alt="About Image"/>
            </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Qualifications</h5>
              <small>BSc in Computer Science from Cardiff University</small>
            </article>

            <article className='about__card'>
              <BsBriefcaseFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working Full Time as a Java Developer</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Qualifications</h5>
              <small>BSc in Computer Science from Cardiff University</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
               laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                 voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.</p>
          <div className='cta'>
          <a href={CV} download className='btn btn-primary'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
          <a href="#contact" className='scroll__down'><BsChevronDoubleDown size={40}/></a>
        </div>
      </div>
    </section>
  )
}

export default About