import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alex-smerdon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <BsLinkedin size={26} />
      </a>
      <a href="https://github.com/asmerdon/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={28} />
      </a>
    </div>
  )
}

export default HeaderSocials
