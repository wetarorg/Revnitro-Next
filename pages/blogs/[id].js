import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'

import blogsPageInitialPaths77f17Resource from '../../resources/blogs-page-initial-paths-77f17'
import blogsPageInitialProps1a0deResource from '../../resources/blogs-page-initial-props-1a0de'

const Blogs = (props) => {
  return (
    <>
      <div className="blogs-container">
        <Head>
          <title>Blogs - Revnitro</title>
          <meta property="og:title" content="Blogs - Revnitro" />
        </Head>
        <header data-thq="thq-navbar" className="blogs-navbar">
          <Link href="/">
            <a className="blogs-link">
              <img
                alt="image"
                src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                className="blogs-image"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="blogs-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="blogs-nav"
            >
              <a
                href="https://revnitroblog2.vercel.app/blog"
                target="_blank"
                rel="noreferrer noopener"
                className="blogs-link1 navLink"
              >
                Blogs
              </a>
              <span className="navLink">Course</span>
              <span className="navLink">Forum</span>
              <span className="navLink">Team</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="blogs-burger-menu">
            <svg viewBox="0 0 1024 1024" className="blogs-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="blogs-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="blogs-nav1"
            >
              <div className="blogs-container1">
                <div data-thq="thq-close-menu" className="blogs-menu-close">
                  <svg viewBox="0 0 1024 1024" className="blogs-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="blogs-nav2"
              >
                <span className="navLink blogs-text">Team</span>
                <span className="navLink blogs-text01">Blog</span>
              </nav>
              <div className="blogs-icon-group">
                <div className="blogs-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="blogs-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="blogs-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="blogs-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <DataProvider
          renderSuccess={(BlogsEntity) => (
            <>
              <div className="blogs-container2">
                <h1 className="blogs-text02">{BlogsEntity?.Title}</h1>
                <span>{BlogsEntity?.description}</span>
                <div className="blogs-container3">
                  <span className="blogs-text04">{BlogsEntity?.Category}</span>
                  <span className="blogs-text05">{BlogsEntity?.author}</span>
                  <span className="blogs-text06">{BlogsEntity?.Date}</span>
                </div>
                <div className="blogs-container4">
                  <Markdown>{BlogsEntity?.content}</Markdown>
                </div>
              </div>
            </>
          )}
          initialData={props.blogsEntity}
          persistDataDuringLoading={true}
          key={props?.blogsEntity?.id}
        />
        <div className="blogs-footer">
          <div className="blogs-content">
            <div className="blogs-main">
              <div className="blogs-branding">
                <img
                  src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                  loading="eager"
                  className="blogs-image1"
                />
                <span className="blogs-text07">
                  <span>Redefining Automobile Journalism</span>
                  <br className="blogs-text09"></br>
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
              <div className="blogs-links">
                <div className="blogs-column">
                  <span className="blogs-header">Company</span>
                  <div className="blogs-list">
                    <span className="blogs-text13">About</span>
                    <span className="blogs-text14">Services</span>
                    <span className="blogs-text15">
                      <span className="blogs-text16">Team</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="blogs-column1">
                  <span className="blogs-header1">
                    <span>Resources</span>
                    <br></br>
                  </span>
                  <div className="blogs-list1">
                    <span className="blogs-text20">Articles</span>
                    <span className="blogs-text21">Blog</span>
                  </div>
                </div>
                <div className="blogs-column2">
                  <span className="blogs-header2">Social</span>
                  <div className="blogs-list2">
                    <span className="blogs-text22">Twitter</span>
                    <span className="blogs-text23">Instagram</span>
                    <span className="blogs-text24">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogs-bottom">
              <span className="blogs-text25">
                © 2023 Revnitro - All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blogs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blogs-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .blogs-link {
            display: contents;
          }
          .blogs-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .blogs-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .blogs-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .blogs-link1 {
            text-decoration: none;
          }
          .blogs-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .blogs-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blogs-mobile-menu {
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
          .blogs-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .blogs-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .blogs-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blogs-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-icon-group {
            display: flex;
            z-index: 20;
          }
          .blogs-icons {
            display: flex;
          }
          .blogs-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .blogs-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .blogs-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blogs-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .blogs-text02 {
            font-size: 90px;
            font-family: Poppins;
          }
          .blogs-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .blogs-text04 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-black);
          }
          .blogs-text05 {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .blogs-text06 {
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .blogs-container4 {
            width: 100%;
            align-self: stretch;
          }
          .blogs-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .blogs-content {
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
          .blogs-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blogs-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-image1 {
            width: 120px;
            object-fit: cover;
          }
          .blogs-text07 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .blogs-text09 {
            color: #7c7c80;
            line-height: 24px;
          }
          .blogs-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .blogs-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-header {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .blogs-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-text13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text13:hover {
            opacity: 0.5;
          }
          .blogs-text14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text14:hover {
            opacity: 0.5;
          }
          .blogs-text15 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text15:hover {
            opacity: 0.5;
          }
          .blogs-text16:hover {
            opacity: 0.5;
          }
          .blogs-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .blogs-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-text20 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text20:hover {
            opacity: 0.5;
          }
          .blogs-text21 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text21:hover {
            opacity: 0.5;
          }
          .blogs-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .blogs-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs-text22 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text22:hover {
            opacity: 0.5;
          }
          .blogs-text23 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text23:hover {
            opacity: 0.5;
          }
          .blogs-text24 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .blogs-text24:hover {
            opacity: 0.5;
          }
          .blogs-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blogs-text25 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .blogs-content {
              border-top-width: 0px;
            }
            .blogs-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .blogs-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .blogs-desktop-menu {
              display: none;
            }
            .blogs-burger-menu {
              display: flex;
            }
            .blogs-icon {
              fill: white;
            }
            .blogs-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .blogs-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blogs-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .blogs-text {
              color: rgb(0, 0, 0);
            }
            .blogs-text01 {
              color: rgb(0, 0, 0);
            }
            .blogs-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .blogs-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blogs-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .blogs-mobile-menu {
              padding: 16px;
            }
            .blogs-icon-group {
              justify-content: center;
            }
            .blogs-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .blogs-bottom {
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

Blogs.defaultProps = {
  blogsEntity: [],
}

Blogs.propTypes = {
  blogsEntity: PropTypes.array,
}

export default Blogs

export async function getStaticPaths() {
  try {
    const response = await blogsPageInitialPaths77f17Resource({})
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await blogsPageInitialProps1a0deResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        blogsEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
