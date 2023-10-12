import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Coursespage = (props) => {
  return (
    <>
      <div className="coursespage-container">
        <Head>
          <title>Coursespage - Revnitro</title>
          <meta property="og:title" content="Coursespage - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <div className="coursespage-container1">
          <div className="coursespage-navbar"></div>
          <header className="coursespage-hero">
            <div className="coursespage-header">
              <h1 className="coursespage-title">
                Design the change you wanna see
              </h1>
              <p className="coursespage-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod consectetur tempor incididunt.
              </p>
            </div>
          </header>
          <div className="coursespage-image">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="coursespage-image1"
            />
          </div>
          <div className="coursespage-description1">
            <div className="coursespage-content">
              <div className="coursespage-text">
                <p className="coursespage-paragraph">
                  We are a team of aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat.
                </p>
                <p className="coursespage-paragraph1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit.
                </p>
              </div>
            </div>
          </div>
          <div className="coursespage-featured">
            <div className="coursespage-header1">
              <h2 className="heading">PROGRAM OUTCOME</h2>
              <div className="coursespage-link"></div>
            </div>
            <div className="coursespage-list">
              <div className="coursespage-work">
                <img
                  alt="image"
                  src="/external/work%20%231-1500w-1300w.png"
                  className="coursespage-image2"
                />
                <img
                  alt="image"
                  src="/external/work%20%231-1500w-1300w.png"
                  className="coursespage-image3"
                />
                <img
                  alt="image"
                  src="/external/work%20%231-1500w-1300w.png"
                  className="coursespage-image4"
                />
              </div>
            </div>
          </div>
          <div className="coursespage-about">
            <div className="coursespage-client-list">
              <div className="coursespage-header2">
                <h2 className="coursespage-title2 heading">DETAILS</h2>
              </div>
              <div className="coursespage-row">
                <div className="coursespage-list1">
                  <div className="coursespage-item service">
                    <div className="coursespage-details">
                      <span className="coursespage-text1">Venue</span>
                      <span className="coursespage-text2">
                        Strategy / Webdevelopment / Marketing
                      </span>
                    </div>
                  </div>
                  <div className="coursespage-item1 service">
                    <div className="coursespage-details1">
                      <span className="coursespage-text3">Course Duration</span>
                      <span className="coursespage-text4">
                        Strategy / Webdevelopment / Marketing
                      </span>
                    </div>
                  </div>
                  <div className="coursespage-item2 service">
                    <div className="coursespage-details2">
                      <span className="coursespage-text5">
                        Next available slot
                      </span>
                      <span className="coursespage-text6">
                        Strategy / Webdevelopment / Marketing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="coursespage-button button start-button">
              <span className="coursespage-text7">ENROLL COURSE</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .coursespage-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .coursespage-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .coursespage-navbar {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .coursespage-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .coursespage-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: 150px;
          }
          .coursespage-title {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 80px;
            max-width: 895px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 84px;
            text-transform: uppercase;
          }
          .coursespage-description {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .coursespage-image {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .coursespage-image1 {
            width: 100%;
            object-fit: cover;
          }
          .coursespage-description1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            border-top-width: 1px;
          }
          .coursespage-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .coursespage-text {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .coursespage-paragraph {
            font-size: 32px;
            line-height: 48px;
          }
          .coursespage-paragraph1 {
            font-size: 32px;
            line-height: 48px;
          }
          .coursespage-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .coursespage-header1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .coursespage-link {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .coursespage-list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .coursespage-work {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .coursespage-image2 {
            width: 369px;
            height: 407px;
            object-fit: cover;
          }
          .coursespage-image3 {
            width: 369px;
            height: 407px;
            object-fit: cover;
          }
          .coursespage-image4 {
            width: 369px;
            height: 407px;
            object-fit: cover;
          }
          .coursespage-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #151515;
          }
          .coursespage-client-list {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .coursespage-header2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .coursespage-title2 {
            color: rgb(255, 255, 255);
          }
          .coursespage-row {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .coursespage-list1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .coursespage-item {
            width: 100%;
            position: relative;
          }
          .coursespage-details {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
          }
          .coursespage-text1 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .coursespage-text2 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .coursespage-item1 {
            width: 100%;
            position: relative;
          }
          .coursespage-details1 {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
          }
          .coursespage-text3 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .coursespage-text4 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .coursespage-item2 {
            width: 100%;
            position: relative;
          }
          .coursespage-details2 {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: space-between;
          }
          .coursespage-text5 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .coursespage-text6 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .coursespage-button {
            align-self: flex-end;
            margin-top: var(--dl-space-space-fourunits);
            background-color: #2200ff;
          }
          .coursespage-text7 {
            color: rgb(255, 255, 255);
          }
          @media (max-width: 991px) {
            .coursespage-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .coursespage-title {
              font-size: 40px;
              line-height: 36px;
            }
            .coursespage-description {
              font-size: 16px;
              line-height: 24px;
            }
            .coursespage-description1 {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .coursespage-text {
              gap: var(--dl-space-space-unit);
            }
            .coursespage-paragraph {
              font-size: 18px;
              line-height: 27px;
            }
            .coursespage-paragraph1 {
              font-size: 18px;
              line-height: 27px;
            }
            .coursespage-header1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .coursespage-link {
              display: none;
            }
            .coursespage-work {
              gap: 0px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .coursespage-image2 {
              width: 100%;
            }
            .coursespage-image3 {
              width: 100%;
            }
            .coursespage-image4 {
              width: 100%;
            }
            .coursespage-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .coursespage-client-list {
              gap: var(--dl-space-space-threeunits);
            }
            .coursespage-header2 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .coursespage-row {
              flex-direction: column;
            }
            .coursespage-list1 {
              width: 100%;
            }
            .coursespage-item {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .coursespage-details {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .coursespage-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .coursespage-text2 {
              font-size: 14px;
              line-height: 21px;
            }
            .coursespage-item1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .coursespage-details1 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .coursespage-text3 {
              font-size: 16px;
              line-height: 24px;
            }
            .coursespage-text4 {
              font-size: 14px;
              line-height: 21px;
            }
            .coursespage-item2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .coursespage-details2 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .coursespage-text5 {
              font-size: 16px;
              line-height: 24px;
            }
            .coursespage-text6 {
              font-size: 14px;
              line-height: 21px;
            }
            .coursespage-button {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .coursespage-text7 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
          }
          @media (max-width: 767px) {
            .coursespage-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Coursespage
