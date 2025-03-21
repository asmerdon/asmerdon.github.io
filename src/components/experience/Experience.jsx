
import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>Skills</h5>
      <div className='experience__title'>
        <h1>My Experience</h1>
      </div>
      <div className='container experience__container'>
        <div className="experience__frontend"><h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div><h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div><h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div><h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div><h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article></div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>TensorFlow</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience