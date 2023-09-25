import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import Blogcard from '../components/blogcard'

const Hr = (props) => {
  return (
    <>
      <div className="hr-container">
        <Head>
          <title>hr - Revnitro</title>
          <meta property="og:title" content="hr - Revnitro" />
        </Head>
        <header data-thq="thq-navbar" className="hr-navbar">
          <Link href="/">
            <a className="hr-link">
              <img
                alt="image"
                src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                className="hr-image"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="hr-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="hr-nav"
            >
              <span className="navLink">Blogs</span>
              <span className="navLink">Course</span>
              <span className="navLink">Forum</span>
              <span className="navLink">Team</span>
            </nav>
            <button className="hr-register button">
              <span className="hr-text">BOOK SERVICES</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="hr-burger-menu">
            <svg viewBox="0 0 1024 1024" className="hr-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="hr-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="hr-nav1"
            >
              <div className="hr-container1">
                <div data-thq="thq-close-menu" className="hr-menu-close">
                  <svg viewBox="0 0 1024 1024" className="hr-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="hr-nav2"
              >
                <span className="navLink hr-text01">Team</span>
                <span className="navLink hr-text02">Blog</span>
              </nav>
              <div className="hr-icon-group">
                <div className="hr-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="hr-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="hr-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="hr-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="hr-tvs">
          <DataProvider
            fetchData={(params) =>
              fetch(`/api/hr-resource-hr?${new URLSearchParams(params)}`, {
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
                      <Blogcard
                        name={context_ngumra?.Title}
                        image={context_ngumra?.ImageUrl}
                        linktext={context_ngumra?.BlogUrl}
                        rootClassName="blogcard-root-class-name55"
                      ></Blogcard>
                    </>
                  )}
                />
              </>
            )}
          />
        </div>
        <div className="hr-footer">
          <div className="hr-content">
            <div className="hr-main">
              <div className="hr-branding">
                <img
                  src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                  className="hr-image1"
                />
                <span className="hr-text03">
                  <span>Redefining Automobile Journalism</span>
                  <br className="hr-text05"></br>
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
              <div className="hr-links">
                <div className="hr-column">
                  <span className="hr-header">Company</span>
                  <div className="hr-list">
                    <span className="hr-text09">About</span>
                    <span className="hr-text10">Services</span>
                    <span className="hr-text11">
                      <span className="hr-text12">Team</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="hr-column1">
                  <span className="hr-header1">
                    <span>Resources</span>
                    <br></br>
                  </span>
                  <div className="hr-list1">
                    <span className="hr-text16">Articles</span>
                    <span className="hr-text17">Blog</span>
                  </div>
                </div>
                <div className="hr-column2">
                  <span className="hr-header2">Social</span>
                  <div className="hr-list2">
                    <span className="hr-text18">Twitter</span>
                    <span className="hr-text19">Instagram</span>
                    <span className="hr-text20">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hr-bottom">
              <span className="hr-text21">
                © 2023 Revnitro - All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hr-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .hr-navbar {
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
          .hr-link {
            display: contents;
          }
          .hr-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .hr-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .hr-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .hr-register {
            margin-right: var(--dl-space-space-twounits);
          }
          .hr-text {
            font-size: 16px;
          }
          .hr-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .hr-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .hr-mobile-menu {
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
          .hr-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .hr-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hr-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .hr-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-icon-group {
            display: flex;
            z-index: 20;
          }
          .hr-icons {
            display: flex;
          }
          .hr-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .hr-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .hr-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .hr-tvs {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
          }
          .hr-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .hr-content {
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
          .hr-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .hr-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-image1 {
            width: 120px;
            object-fit: cover;
          }
          .hr-text03 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .hr-text05 {
            color: #7c7c80;
            line-height: 24px;
          }
          .hr-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .hr-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-header {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .hr-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-text09 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text09:hover {
            opacity: 0.5;
          }
          .hr-text10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text10:hover {
            opacity: 0.5;
          }
          .hr-text11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text11:hover {
            opacity: 0.5;
          }
          .hr-text12:hover {
            opacity: 0.5;
          }
          .hr-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .hr-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-text16 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text16:hover {
            opacity: 0.5;
          }
          .hr-text17 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text17:hover {
            opacity: 0.5;
          }
          .hr-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .hr-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .hr-text18 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text18:hover {
            opacity: 0.5;
          }
          .hr-text19 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text19:hover {
            opacity: 0.5;
          }
          .hr-text20 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .hr-text20:hover {
            opacity: 0.5;
          }
          .hr-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hr-text21 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .hr-content {
              border-top-width: 0px;
            }
            .hr-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .hr-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hr-desktop-menu {
              display: none;
            }
            .hr-burger-menu {
              display: flex;
            }
            .hr-icon {
              fill: white;
            }
            .hr-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .hr-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .hr-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .hr-text01 {
              color: rgb(0, 0, 0);
            }
            .hr-text02 {
              color: rgb(0, 0, 0);
            }
            .hr-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .hr-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .hr-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .hr-mobile-menu {
              padding: 16px;
            }
            .hr-icon-group {
              justify-content: center;
            }
            .hr-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .hr-bottom {
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

export default Hr
