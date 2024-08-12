import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alex-smerdon/" target="_blank"><BsLinkedin size={32}/></a>
        <a href="https://github.com/asmerdon/" target="_blank"><FaGithub size={32}/></a>
    </div>
  )
}

export default HeaderSocials