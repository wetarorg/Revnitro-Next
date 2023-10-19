import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import coursesPageInitialPathsA031cResource from '../../resources/courses-page-initial-paths-a031c'
import coursesPageInitialProps87d79Resource from '../../resources/courses-page-initial-props-87d79'

const Courses = (props) => {
  return (
    <>
      <div className="courses-container">
        <Head>
          <title>Courses - Revnitro</title>
          <meta property="og:title" content="Courses - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name12"></Navbar>
        <DataProvider
          renderSuccess={(CoursesEntity) => (
            <>
              <div className="courses-container1">
                <div className="courses-medias">
                  <div className="courses-image">
                    <img
                      alt="image"
                      src={CoursesEntity?.primaryimage?.url}
                      className="courses-image1"
                    />
                  </div>
                  <div className="courses-work">
                    <img
                      alt="image"
                      src={CoursesEntity?.image1?.url}
                      className="courses-image2"
                    />
                    <img
                      alt="image"
                      src={CoursesEntity?.image2?.url}
                      className="courses-image3"
                    />
                    <img
                      alt="image"
                      src={CoursesEntity?.image3?.url}
                      className="courses-image4"
                    />
                  </div>
                </div>
                <div className="courses-content">
                  <div className="courses-header">
                    <h1 className="courses-title">{CoursesEntity?.Title}</h1>
                    <p className="courses-description description">
                      {CoursesEntity?.description}
                    </p>
                  </div>
                  <div className="courses-description1">
                    <div className="courses-content1">
                      <div className="description">
                        <ReactMarkdown>
                          {CoursesEntity?.programoutcome}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  <div className="courses-header1">
                    <h2 className="courses-title1 heading">PROGRAM OUTCOME</h2>
                    <div className="courses-link"></div>
                  </div>
                  <div className="courses-about">
                    <div className="courses-client-list">
                      <div className="courses-header2">
                        <h2 className="courses-title2 heading">DETAILS</h2>
                      </div>
                      <div className="courses-row">
                        <div className="courses-list">
                          <div className="courses-item service">
                            <div className="courses-details">
                              <span className="courses-text">Venue</span>
                              <span className="courses-text1">
                                {CoursesEntity?.venue}
                              </span>
                            </div>
                          </div>
                          <div className="courses-item1 service">
                            <div className="courses-details1">
                              <span className="courses-text2">
                                Course Duration
                              </span>
                              <span className="courses-text3">
                                {CoursesEntity?.duration}
                              </span>
                            </div>
                          </div>
                          <div className="courses-item2 service">
                            <div className="courses-details2">
                              <span className="courses-text4">
                                Next available slot
                              </span>
                              <span className="courses-text5">
                                {CoursesEntity?.nextslot}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="courses-button button start-button">
                      <span className="courses-text6">ENROLL COURSE</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          initialData={props.coursesEntity}
          persistDataDuringLoading={true}
          key={props?.coursesEntity?.id}
        />
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
      <style jsx>
        {`
          .courses-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .courses-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .courses-medias {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .courses-image {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .courses-image1 {
            width: 100%;
            object-fit: cover;
            border-radius: 17px;
          }
          .courses-work {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: center;
            border-color: #151515;
            flex-direction: column;
            border-bottom-width: 0px;
          }
          .courses-image2 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 16px;
          }
          .courses-image3 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 16px;
          }
          .courses-image4 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 16px;
          }
          .courses-content {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .courses-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .courses-title {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 40px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 700;
            line-height: 40px;
            text-transform: uppercase;
          }
          .courses-description {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: left;
            line-height: 36px;
          }
          .courses-description1 {
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
          .courses-content1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .courses-header1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .courses-title1 {
            font-size: 40px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 40px;
          }
          .courses-link {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .courses-about {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .courses-client-list {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .courses-header2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: 0px;
            border-bottom-width: 1px;
          }
          .courses-title2 {
            color: var(--dl-color-gray-black);
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
          }
          .courses-row {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .courses-list {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .courses-item {
            width: 100%;
            position: relative;
          }
          .courses-details {
            flex: 1;
            margin: 0px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .courses-text {
            color: var(--dl-color-gray-black);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .courses-text1 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            line-height: 36px;
          }
          .courses-item1 {
            width: 100%;
            position: relative;
          }
          .courses-details1 {
            flex: 1;
            margin: 0px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .courses-text2 {
            color: var(--dl-color-gray-black);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .courses-text3 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            line-height: 36px;
          }
          .courses-item2 {
            width: 100%;
            position: relative;
          }
          .courses-details2 {
            flex: 1;
            margin: 0px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .courses-text4 {
            color: var(--dl-color-gray-black);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .courses-text5 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            line-height: 36px;
          }
          .courses-button {
            align-self: flex-start;
            margin-top: var(--dl-space-space-fourunits);
            background-color: #2200ff;
          }
          .courses-text6 {
            color: rgb(255, 255, 255);
          }
          @media (max-width: 991px) {
            .courses-work {
              gap: 0px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .courses-image2 {
              width: 100%;
            }
            .courses-image3 {
              width: 100%;
            }
            .courses-image4 {
              width: 100%;
            }
            .courses-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .courses-title {
              font-size: 40px;
              line-height: 36px;
            }
            .courses-description {
              font-size: 16px;
              line-height: 24px;
            }
            .courses-description1 {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .courses-header1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .courses-link {
              display: none;
            }
            .courses-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .courses-client-list {
              gap: var(--dl-space-space-threeunits);
            }
            .courses-header2 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .courses-row {
              flex-direction: column;
            }
            .courses-list {
              width: 100%;
            }
            .courses-item {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .courses-details {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .courses-text {
              font-size: 16px;
              line-height: 24px;
            }
            .courses-text1 {
              font-size: 14px;
              line-height: 21px;
            }
            .courses-item1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .courses-details1 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .courses-text2 {
              font-size: 16px;
              line-height: 24px;
            }
            .courses-text3 {
              font-size: 14px;
              line-height: 21px;
            }
            .courses-item2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .courses-details2 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .courses-text4 {
              font-size: 16px;
              line-height: 24px;
            }
            .courses-text5 {
              font-size: 14px;
              line-height: 21px;
            }
            .courses-button {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .courses-text6 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
          }
          @media (max-width: 767px) {
            .courses-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

Courses.defaultProps = {
  coursesEntity: [],
}

Courses.propTypes = {
  coursesEntity: PropTypes.array,
}

export default Courses

export async function getStaticPaths() {
  try {
    const response = await coursesPageInitialPathsA031cResource({})
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
    const response = await coursesPageInitialProps87d79Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        coursesEntity: response?.data?.[0],
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
