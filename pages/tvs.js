import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import Speaker from '../components/speaker'

const Tvs = (props) => {
  return (
    <>
      <div className="tvs-container">
        <Head>
          <title>tvs - Revnitro</title>
          <meta property="og:title" content="tvs - Revnitro" />
        </Head>
        <header data-thq="thq-navbar" className="tvs-navbar">
          <Link href="/">
            <a className="tvs-link">
              <img
                alt="image"
                src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                className="tvs-image"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="tvs-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="tvs-nav"
            >
              <span className="navLink">Blogs</span>
              <span className="navLink">Course</span>
              <span className="navLink">Forum</span>
              <span className="navLink">Team</span>
            </nav>
            <button className="tvs-register button">
              <span className="tvs-text">BOOK SERVICES</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="tvs-burger-menu">
            <svg viewBox="0 0 1024 1024" className="tvs-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="tvs-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="tvs-nav1"
            >
              <div className="tvs-container1">
                <div data-thq="thq-close-menu" className="tvs-menu-close">
                  <svg viewBox="0 0 1024 1024" className="tvs-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="tvs-nav2"
              >
                <span className="navLink tvs-text01">Team</span>
                <span className="navLink tvs-text02">Blog</span>
              </nav>
              <div className="tvs-icon-group">
                <div className="tvs-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="tvs-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="tvs-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="tvs-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="tvs-tvs">
          <DataProvider
            fetchData={(params) =>
              fetch(`/api/tvs-resource-tvs?${new URLSearchParams(params)}`, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((res) => res.json())
                .then((data) => data)
            }
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(context_ngumra) => (
                    <>
                      <Speaker
                        name={context_ngumra?.Title}
                        image={context_ngumra?.ImageUrl}
                        linktext={context_ngumra?.BlogUrl}
                        rootClassName="speaker-root-class-name51"
                      ></Speaker>
                    </>
                  )}
                />
              </>
            )}
          />
        </div>
        <div className="tvs-footer">
          <div className="tvs-content">
            <div className="tvs-main">
              <div className="tvs-branding">
                <img
                  src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                  className="tvs-image1"
                />
                <span className="tvs-text03">
                  <span>Redefining Automobile Journalism</span>
                  <br className="tvs-text05"></br>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="tvs-links">
                <div className="tvs-column">
                  <span className="tvs-header">Company</span>
                  <div className="tvs-list">
                    <span className="tvs-text09">About</span>
                    <span className="tvs-text10">Services</span>
                    <span className="tvs-text11">
                      <span className="tvs-text12">Team</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="tvs-column1">
                  <span className="tvs-header1">
                    <span>Resources</span>
                    <br></br>
                  </span>
                  <div className="tvs-list1">
                    <span className="tvs-text16">Articles</span>
                    <span className="tvs-text17">Blog</span>
                  </div>
                </div>
                <div className="tvs-column2">
                  <span className="tvs-header2">Social</span>
                  <div className="tvs-list2">
                    <span className="tvs-text18">Twitter</span>
                    <span className="tvs-text19">Instagram</span>
                    <span className="tvs-text20">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tvs-bottom">
              <span className="tvs-text21">
                © 2023 Revnitro - All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tvs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .tvs-navbar {
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
          .tvs-link {
            display: contents;
          }
          .tvs-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .tvs-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .tvs-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .tvs-register {
            margin-right: var(--dl-space-space-twounits);
          }
          .tvs-text {
            font-size: 16px;
          }
          .tvs-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .tvs-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .tvs-mobile-menu {
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
          .tvs-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .tvs-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tvs-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .tvs-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-icon-group {
            display: flex;
            z-index: 20;
          }
          .tvs-icons {
            display: flex;
          }
          .tvs-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .tvs-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .tvs-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .tvs-tvs {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
          }
          .tvs-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .tvs-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .tvs-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .tvs-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-image1 {
            width: 120px;
            object-fit: cover;
          }
          .tvs-text03 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .tvs-text05 {
            color: #7c7c80;
            line-height: 24px;
          }
          .tvs-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .tvs-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-header {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .tvs-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-text09 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text09:hover {
            opacity: 0.5;
          }
          .tvs-text10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text10:hover {
            opacity: 0.5;
          }
          .tvs-text11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text11:hover {
            opacity: 0.5;
          }
          .tvs-text12:hover {
            opacity: 0.5;
          }
          .tvs-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .tvs-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-text16 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text16:hover {
            opacity: 0.5;
          }
          .tvs-text17 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text17:hover {
            opacity: 0.5;
          }
          .tvs-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .tvs-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tvs-text18 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text18:hover {
            opacity: 0.5;
          }
          .tvs-text19 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text19:hover {
            opacity: 0.5;
          }
          .tvs-text20 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .tvs-text20:hover {
            opacity: 0.5;
          }
          .tvs-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .tvs-text21 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .tvs-content {
              border-top-width: 0px;
            }
            .tvs-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .tvs-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .tvs-desktop-menu {
              display: none;
            }
            .tvs-burger-menu {
              display: flex;
            }
            .tvs-icon {
              fill: white;
            }
            .tvs-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .tvs-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .tvs-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .tvs-text01 {
              color: rgb(0, 0, 0);
            }
            .tvs-text02 {
              color: rgb(0, 0, 0);
            }
            .tvs-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .tvs-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .tvs-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .tvs-mobile-menu {
              padding: 16px;
            }
            .tvs-icon-group {
              justify-content: center;
            }
            .tvs-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .tvs-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Tvs
