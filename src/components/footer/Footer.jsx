import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/alex-smerdon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <BsLinkedin size={20} />
        </a>
        <a href="https://github.com/asmerdon/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alexander Smerdon, {new Date().getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
