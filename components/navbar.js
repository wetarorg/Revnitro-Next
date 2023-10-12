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
              <a
                href="https://revnitroblog2.vercel.app/blog"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link1 navLink"
              >
                {props.link}
              </a>
              <Link href="/courseoffered">
                <a className="navbar-link3 navLink">{props.link1}</a>
              </Link>
              <span className="navLink">{props.link2}</span>
              <Link href="/team">
                <a className="navbar-link6 navLink">{props.link3}</a>
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
                  <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-nav2"
              >
                <span className="navLink navbar-text">{props.text}</span>
                <span className="navLink navbar-text1">{props.text1}</span>
              </nav>
              <div className="navbar-icon-group">
                <div className="navbar-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="navbar-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="navbar-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
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
            max-width: var(--dl-size-size-maxwidth);
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
          .navbar-link1 {
            text-decoration: none;
          }
          .navbar-link3 {
            text-decoration: none;
          }
          .navbar-link6 {
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon {
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
          .navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-icon-group {
            display: flex;
            z-index: 20;
          }
          .navbar-icons {
            display: flex;
          }
          .navbar-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
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
            .navbar-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navbar-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .navbar-text {
              color: rgb(0, 0, 0);
            }
            .navbar-text1 {
              color: rgb(0, 0, 0);
            }
            .navbar-icon-group {
              width: 100%;
              justify-content: flex-start;
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
            .navbar-icon-group {
              justify-content: center;
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
  link1: 'Course',
  link2: 'Forum',
  imagesrc: '/external/ba365a50c6760909f3950a57a9b9ff1c-200h-200h.webp',
  text1: 'Blog',
  imagealt: 'image',
  rootClassName: '',
}

Navbar.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  linkLink: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  imagesrc: PropTypes.string,
  text1: PropTypes.string,
  imagealt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
