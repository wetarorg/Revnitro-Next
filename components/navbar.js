import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar">
          <Link href="/">
            <a className="navbar-link">
              <img
                alt={props.imagealt}
                src={props.imagesrc}
                className="navbar-image"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="navbar-nav"
            >
              <Link href="/allblogs">
                <a className="navbar-link02 navLink">{props.link1}</a>
              </Link>
              <Link href="/courseoffered">
                <a className="navbar-link04 navLink">{props.link11}</a>
              </Link>
              <span className="navbar-link05 navLink">{props.link2}</span>
              <Link href="/team">
                <a className="navbar-link07 navLink">{props.link3}</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav1"
            >
              <div className="navbar-container1">
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-nav2"
              >
                <Link href="/allblogs">
                  <a className="navbar-link09 navLink">{props.link12}</a>
                </Link>
                <Link href="/courseoffered">
                  <a className="navbar-link11 navLink">{props.link111}</a>
                </Link>
                <span className="navbar-link12 navLink">{props.link21}</span>
                <Link href="/team">
                  <a className="navbar-link14 navLink">{props.link31}</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            background-color: var(--dl-color-gray-black);
          }
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .navbar-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .navbar-link02 {
            text-decoration: none;
          }
          .navbar-link04 {
            text-decoration: none;
          }
          .navbar-link05 {
            display: none;
          }
          .navbar-link07 {
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .navbar-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon2 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-link09 {
            text-decoration: none;
          }
          .navbar-link11 {
            text-decoration: none;
          }
          .navbar-link12 {
            display: none;
          }
          .navbar-link14 {
            text-decoration: none;
          }
          .navbar-root-class-name {
            width: 100%;
          }
          .navbar-root-class-name1 {
            width: 100%;
          }

          @media (max-width: 767px) {
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
            }
            .navbar-icon {
              fill: white;
            }
            .navbar-mobile-menu {
              background-color: var(--dl-color-gray-black);
            }
            .navbar-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-nav2 {
              gap: var(--dl-space-space-unit);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link: 'Blogs',
  text: 'Team',
  linkLink: 'https://revnitroblog2.vercel.app/blog',
  link3: 'Team',
  link1: 'Blogs',
  link11: 'Course',
  link111: 'Course',
  link12: 'Blogs',
  link2: 'Forum',
  imagesrc: '/external/ba365a50c6760909f3950a57a9b9ff1c-200h-200h.webp',
  text1: 'Blog',
  link31: 'Team',
  imagealt: 'image',
  link21: 'Forum',
  rootClassName: '',
}

Navbar.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  linkLink: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link11: PropTypes.string,
  link111: PropTypes.string,
  link12: PropTypes.string,
  link2: PropTypes.string,
  imagesrc: PropTypes.string,
  text1: PropTypes.string,
  link31: PropTypes.string,
  imagealt: PropTypes.string,
  link21: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
