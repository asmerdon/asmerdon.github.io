import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { BiMessageRounded } from 'react-icons/bi'

const links = [
  { href: '#home', label: 'Home', icon: <AiOutlineHome /> },
  { href: '#about', label: 'About', icon: <AiOutlineUser /> },
  { href: '#portfolio', label: 'Portfolio', icon: <HiOutlineFolderOpen /> },
  { href: '#contact', label: 'Contact', icon: <BiMessageRounded /> },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      {links.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
        >
          {icon}
        </a>
      ))}
    </nav>
  )
}

export default Nav
