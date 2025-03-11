import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/alex-smerdon/" target="_blank"><BsLinkedin size={32}/></a>
        <a href="https://github.com/asmerdon/" target="_blank"><FaGithub size={32}/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Alexander Smerdon, 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer