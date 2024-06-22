import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-container">
        <div className="navbar-container1">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="navbar-image"
          />
        </div>
        <span className="navbar-link nav-link">APOLLYON GROUP</span>
      </div>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <a href="#Features" className="navbar-link01 nav-link">
            Features
          </a>
          <a href="#foot" className="navbar-link02 nav-link">
            Why us
          </a>
          <a href="#price" className="navbar-link03 nav-link">
            Prices
          </a>
          <a href="#foot" className="navbar-link04 nav-link">
            Contact
          </a>
        </div>
        <a href="#mains" className="navbar-link05">
          <div className="navbar-get-started get-started">
            <span className="navbar-text">Get started</span>
          </div>
        </a>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image1"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-nav-links1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text1">Get started</span>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  imageSrc2: '/Branding/a-200h.png',
  imageAlt2: 'image',
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: '/Icons/hamburger-200h.png',
  imageAlt1: 'image',
  rootClassName: '',
  brandingLogo:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08e9141c-e9e9-4d51-994d-22f260b21c68/0f4ac702-51a5-4a68-8182-06e3f427edb8?org_if_sml=14251',
}

Navbar.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
