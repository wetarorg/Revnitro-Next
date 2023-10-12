import React, { useState } from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const Blogs1 = (props) => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <section className="blogs1-blogs">
        <div className="blogs1-container">
          <div onClick={() => setTab(1)} className="blogs1-filter">
            <h1 className="bloghead blogs1-text">{props.heading}</h1>
            {tab === 1 && <div className="blogs1-container1"></div>}
          </div>
          <div onClick={() => setTab(2)} className="blogs1-filter1">
            <h1 className="blogs1-text01">{props.heading4}</h1>
            {tab === 2 && <div className="blogs1-container2"></div>}
          </div>
          <div onClick={() => setTab(3)} className="blogs1-filter2">
            <h1 className="blogs1-text02">{props.heading3}</h1>
            {tab === 3 && <div className="blogs1-container3"></div>}
          </div>
          <div onClick={() => setTab(4)} className="blogs1-filter3">
            <h1 className="blogs1-text03">{props.heading2}</h1>
            {tab === 4 && <div className="blogs1-container4"></div>}
          </div>
        </div>
        <div className="blogs1-container5">
          {tab === 1 && (
            <div className="blogs1-blog-cards">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs1resource-blogs1?${new URLSearchParams(params)}`,
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
                      renderItem={(context_oiflm) => (
                        <>
                          <div className="blogs1-speaker">
                            <img
                              alt="image"
                              src={context_oiflm?.thumbnail?.url}
                              className="blogs1-image"
                            />
                            <div className="blogs1-deails">
                              <h3 className="blogs1-name">
                                {context_oiflm?.Title}
                              </h3>
                              <button
                                type="button"
                                className="blogs1-button button"
                              >
                                <Link href={`/blogs/${context_oiflm?.id}`}>
                                  <a className="blogs1-link">
                                    <span>Read</span>
                                    <br></br>
                                  </a>
                                </Link>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 2 && (
            <div className="blogs1-blog-cards1">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs11resource-blogs11?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <div className="blogs1-speaker1">
                            <img
                              alt="image"
                              src={context_oiflm?.thumbnail?.url}
                              className="blogs1-image1"
                            />
                            <div className="blogs1-deails1">
                              <h3 className="blogs1-name1">
                                {context_oiflm?.Title}
                              </h3>
                              <button
                                type="button"
                                className="blogs1-button1 button"
                              >
                                <Link href={`/blogs/${context_oiflm?.id}`}>
                                  <a className="blogs1-link1">
                                    <span>Read</span>
                                    <br></br>
                                  </a>
                                </Link>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 3 && (
            <div className="blogs1-blog-cards2">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs12resource-blogs12?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <div className="blogs1-speaker2">
                            <img
                              alt="image"
                              src={context_oiflm?.thumbnail?.url}
                              className="blogs1-image2"
                            />
                            <div className="blogs1-deails2">
                              <h3 className="blogs1-name2">
                                {context_oiflm?.Title}
                              </h3>
                              <button
                                type="button"
                                className="blogs1-button2 button"
                              >
                                <Link href={`/blogs/${context_oiflm?.id}`}>
                                  <a className="blogs1-link2">
                                    <span>Read</span>
                                    <br></br>
                                  </a>
                                </Link>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 4 && (
            <div className="blogs1-blog-cards3">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs13resource-blogs13?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <div className="blogs1-speaker3">
                            <img
                              alt="image"
                              src={context_oiflm?.thumbnail?.url}
                              className="blogs1-image3"
                            />
                            <div className="blogs1-deails3">
                              <h3 className="blogs1-name3">
                                {context_oiflm?.Title}
                              </h3>
                              <button
                                type="button"
                                className="blogs1-button3 button"
                              >
                                <Link href={`/blogs/${context_oiflm?.id}`}>
                                  <a className="blogs1-link3">
                                    <span>Read</span>
                                    <br></br>
                                  </a>
                                </Link>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
        </div>
      </section>
      <style jsx>
        {`
          .blogs1-blogs {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 80px;
            flex-direction: column;
            padding-bottom: 80px;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-container {
            flex: 0 0 auto;
            width: 90%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(128, 123, 123, 0.72);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .blogs1-filter {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-container1 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter1 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text01 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            user-select: none;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container2 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter2 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text02 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container3 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter3 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text03 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container4 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .blogs1-blog-cards {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .blogs1-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogs1-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs1-name {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogs1-button {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }
          .blogs1-link {
            text-decoration: none;
          }
          .blogs1-blog-cards1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .blogs1-speaker1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-image1 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogs1-deails1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs1-name1 {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogs1-button1 {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }
          .blogs1-link1 {
            text-decoration: none;
          }
          .blogs1-blog-cards2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .blogs1-speaker2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-image2 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogs1-deails2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs1-name2 {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogs1-button2 {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }
          .blogs1-link2 {
            text-decoration: none;
          }
          .blogs1-blog-cards3 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .blogs1-speaker3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-image3 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogs1-deails3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs1-name3 {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogs1-button3 {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }
          .blogs1-link3 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .blogs1-name {
              font-size: 20px;
            }
            .blogs1-name1 {
              font-size: 20px;
            }
            .blogs1-name2 {
              font-size: 20px;
            }
            .blogs1-name3 {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .blogs1-blogs {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .blogs1-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogs1-name {
              font-size: 14px;
            }
            .blogs1-speaker1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogs1-name1 {
              font-size: 14px;
            }
            .blogs1-speaker2 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogs1-name2 {
              font-size: 14px;
            }
            .blogs1-speaker3 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogs1-name3 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .blogs1-text {
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
            }
            .blogs1-text01 {
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
            }
            .blogs1-text02 {
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
            }
            .blogs1-text03 {
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
            }
            .blogs1-blog-cards {
              flex-direction: column;
            }
            .blogs1-blog-cards1 {
              flex-direction: column;
            }
            .blogs1-blog-cards2 {
              flex-direction: column;
            }
            .blogs1-blog-cards3 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Blogs1.defaultProps = {
  rootClassName1: '',
  name: 'Samantha Johnson',
  heading3: 'RIDER TIPS',
  heading11: 'TECHNICAL TIPS',
  heading4: 'CAR REVIEWS',
  image: '5caff76b-e5de-4574-b8e4-040b6183fe63',
  heading2: 'TECHNICAL TIPS',
  rootClassName111: '',
  heading: 'BIKE REVIEWS',
  componentbutton: '',
  rootClassName: '',
  rootClassName11: '',
  heading12: 'RIDER TIPS',
}

Blogs1.propTypes = {
  rootClassName1: PropTypes.string,
  name: PropTypes.string,
  heading3: PropTypes.string,
  heading11: PropTypes.string,
  heading4: PropTypes.string,
  image: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName111: PropTypes.string,
  heading: PropTypes.string,
  componentbutton: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName11: PropTypes.string,
  heading12: PropTypes.string,
}

export default Blogs1
