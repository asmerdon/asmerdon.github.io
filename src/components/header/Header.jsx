import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials' 

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h2>Alex Smerdon</h2>
      <br></br>
      <HeaderSocial />
      </div>

    </header>
  )
}

export default Header