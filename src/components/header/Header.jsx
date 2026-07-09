import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Alexander Smerdon</h1>
        <p className="header__tagline">Data Scientist &amp; Software Developer</p>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
