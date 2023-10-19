import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Courseoffered = (props) => {
  return (
    <>
      <div className="courseoffered-container">
        <Head>
          <title>courseoffered - Revnitro</title>
          <meta property="og:title" content="courseoffered - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <header className="courseoffered-hero">
          <div className="courseoffered-header">
            <h1 className="courseoffered-title">Courses offered</h1>
            <p className="courseoffered-description">
              <span className="courseoffered-text">
                Team Revnitro is committed in sharing knowledge
              </span>
              <br></br>
              <span>
                following are the course offered by team Revnitro in alliance
                with hands on experience
              </span>
              <br></br>
            </p>
          </div>
        </header>
        <div className="courseoffered-courses">
          <DataProvider
            fetchData={(params) =>
              fetch(
                `/api/courseoffered-resource-courseoffered?${new URLSearchParams(
                  params
                )}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => data)
            }
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(context_z7w9mp) => (
                    <>
                      <Link href={`/courses/${context_z7w9mp?.id}`}>
                        <a>
                          <div className="courseoffered-container1">
                            <div className="courseoffered-speaker">
                              <img
                                alt="image"
                                src={context_z7w9mp?.primaryimage?.url}
                                className="courseoffered-image"
                              />
                              <div className="courseoffered-deails">
                                <h3 className="courseoffered-name">
                                  {context_z7w9mp?.Title}
                                </h3>
                              </div>
                              <button className="courseoffered-button button">
                                <span className="courseoffered-text4">
                                  KNOW MORE
                                </span>
                              </button>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </>
            )}
          />
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .courseoffered-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .courseoffered-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .courseoffered-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .courseoffered-title {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 80px;
            max-width: 895px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 115px;
            text-transform: uppercase;
          }
          .courseoffered-description {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .courseoffered-courses {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .courseoffered-container1 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .courseoffered-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .courseoffered-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 18px;
          }
          .courseoffered-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .courseoffered-name {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .courseoffered-button {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: 0px;
            border-radius: 30px;
            background-color: #2200ff;
          }
          .courseoffered-text4 {
            margin: 0px;
            font-size: 24px;
            font-family: Poppins;
          }
          @media (max-width: 1600px) {
            .courseoffered-header {
              padding-top: var(--dl-space-space-threeunits);
            }
            .courseoffered-title {
              font-size: 50px;
              line-height: 50px;
            }
            .courseoffered-courses {
              padding: var(--dl-space-space-threeunits);
            }
            .courseoffered-image {
              border-radius: 4px;
            }
            .courseoffered-button {
              margin-top: 0px;
            }
            .courseoffered-text4 {
              margin: 0px;
              font-size: 24px;
              font-family: Poppins;
            }
          }
          @media (max-width: 991px) {
            .courseoffered-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .courseoffered-title {
              font-size: 40px;
              line-height: 36px;
            }
            .courseoffered-description {
              font-size: 16px;
              line-height: 24px;
            }
            .courseoffered-text {
              font-size: 16px;
              line-height: 24px;
            }
            .courseoffered-courses {
              flex-direction: column;
            }
            .courseoffered-container1 {
              width: auto;
            }
            .courseoffered-speaker {
              align-items: center;
              margin-right: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .courseoffered-image {
              width: var(--dl-size-size-xxlarge);
            }
            .courseoffered-name {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .courseoffered-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .courseoffered-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .courseoffered-name {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .courseoffered-courses {
              align-items: center;
              flex-direction: column;
            }
            .courseoffered-speaker {
              flex-direction: column;
            }
            .courseoffered-name {
              font-size: 24px;
            }
            .courseoffered-button {
              text-align: center;
            }
            .courseoffered-text4 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Courseoffered
