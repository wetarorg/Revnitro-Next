import React, { useState } from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const Blogs1 = (props) => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <section className={`blogs1-blogs ${props.rootClassName} `}>
        <div className="blogs1-container">
          <div onClick={() => setTab(1)} className="blogs1-filter">
            <h1 className="bloghead">{props.heading}</h1>
            {tab === 1 && <div className="blogs1-container01"></div>}
          </div>
          <div onClick={() => setTab(2)} className="blogs1-filter1">
            <h1 className="bloghead">{props.heading4}</h1>
            {tab === 2 && <div className="blogs1-container02"></div>}
          </div>
          <div onClick={() => setTab(3)} className="blogs1-filter2">
            <h1 className="bloghead">{props.heading3}</h1>
            {tab === 3 && <div className="blogs1-container03"></div>}
          </div>
          <div onClick={() => setTab(4)} className="blogs1-filter3">
            <h1 className="blogs1-text03 bloghead">{props.heading2}</h1>
            {tab === 4 && <div className="blogs1-container04"></div>}
          </div>
        </div>
        <div className="blogs1-container05">
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
                          <Link href={`/blogs/${context_oiflm?.id}`}>
                            <a>
                              <div className="blogs1-container06">
                                <img
                                  alt={props.imagealt}
                                  src={context_oiflm?.thumbnail?.url}
                                  className="blogs1-image"
                                />
                                <h1 className="blogs1-text04">
                                  {context_oiflm?.Title}
                                </h1>
                                <span className="blogs1-text05">
                                  {props.text2}
                                </span>
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
                          <Link href={`/blogs/${context_oiflm?.id}`}>
                            <a>
                              <div className="blogs1-container07">
                                <img
                                  alt={props.imagealt2}
                                  src={context_oiflm?.thumbnail?.url}
                                  className="blogs1-image1"
                                />
                                <h1 className="blogs1-text06">
                                  {context_oiflm?.Title}
                                </h1>
                                <span className="blogs1-text07">
                                  {props.text22}
                                </span>
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
                          <Link href={`/blogs/${context_oiflm?.id}`}>
                            <a>
                              <div className="blogs1-container08">
                                <img
                                  alt={props.imagealt25}
                                  src={context_oiflm?.thumbnail?.url}
                                  className="blogs1-image2"
                                />
                                <h1 className="blogs1-text08">
                                  {context_oiflm?.Title}
                                </h1>
                                <span className="blogs1-text09">
                                  {props.text225}
                                </span>
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
                          <Link href={`/blogs/${context_oiflm?.id}`}>
                            <a>
                              <div className="blogs1-container09">
                                <img
                                  alt={props.imagealt251}
                                  src={context_oiflm?.thumbnail?.url}
                                  className="blogs1-image3"
                                />
                                <h1 className="blogs1-text10">
                                  {context_oiflm?.Title}
                                </h1>
                                <span className="blogs1-text11">
                                  {props.text2251}
                                </span>
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

          .blogs1-container01 {
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

          .blogs1-container02 {
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

          .blogs1-container03 {
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
          .blogs1-container04 {
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
          .blogs1-container05 {
            flex: 0 0 auto;
            width: 90%;
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
          .blogs1-container06 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blogs1-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
          }
          .blogs1-text04 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blogs1-text05 {
            color: #ff0000;
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
          .blogs1-container07 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blogs1-image1 {
            width: 400px;
            height: 400px;
            object-fit: cover;
          }
          .blogs1-text06 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blogs1-text07 {
            color: #ff0000;
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
          .blogs1-container08 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blogs1-image2 {
            width: 400px;
            height: 400px;
            object-fit: cover;
          }
          .blogs1-text08 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blogs1-text09 {
            color: #ff0000;
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
          .blogs1-container09 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blogs1-image3 {
            width: 400px;
            height: 400px;
            object-fit: cover;
          }
          .blogs1-text10 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blogs1-text11 {
            color: #ff0000;
          }
          @media (max-width: 1600px) {
            .blogs1-blogs {
              width: 100%;
              padding: 80px;
            }
            .blogs1-container05 {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
              align-self: center;
              align-items: center;
            }
            .blogs1-blog-cards {
              width: auto;
            }
            .blogs1-container06 {
              width: 300px;
            }
            .blogs1-image {
              width: 280px;
              height: 280px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .blogs1-text04 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blogs1-text05 {
              color: #ff0000;
              font-family: Poppins;
            }
            .blogs1-blog-cards1 {
              width: auto;
            }
            .blogs1-container07 {
              width: 300px;
            }
            .blogs1-image1 {
              width: 280px;
              height: 280px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .blogs1-text06 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blogs1-text07 {
              color: #ff0000;
              font-family: Poppins;
            }
            .blogs1-blog-cards2 {
              width: auto;
            }
            .blogs1-container08 {
              width: 300px;
            }
            .blogs1-image2 {
              width: 280px;
              height: 280px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .blogs1-text08 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blogs1-text09 {
              color: #ff0000;
              font-family: Poppins;
            }
            .blogs1-blog-cards3 {
              width: auto;
            }
            .blogs1-container09 {
              width: 300px;
            }
            .blogs1-image3 {
              width: 280px;
              height: 280px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .blogs1-text10 {
              color: var(--dl-color-gray-white);
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blogs1-text11 {
              color: #ff0000;
              font-family: Poppins;
            }
          }
          @media (max-width: 1200px) {
            .blogs1-blogs {
              padding: var(--dl-space-space-fourunits);
            }
            .blogs1-container {
              width: 100%;
            }
            .blogs1-container05 {
              width: 100%;
            }
            .blogs1-blog-cards {
              width: auto;
              align-self: center;
            }
            .blogs1-container06 {
              width: 240px;
            }
            .blogs1-image {
              width: 240px;
              height: 240px;
            }
            .blogs1-blog-cards1 {
              width: auto;
              align-self: center;
            }
            .blogs1-container07 {
              width: 240px;
            }
            .blogs1-image1 {
              width: 240px;
              height: 240px;
            }
            .blogs1-blog-cards2 {
              width: auto;
              align-self: center;
            }
            .blogs1-container08 {
              width: 240px;
            }
            .blogs1-image2 {
              width: 240px;
              height: 240px;
            }
            .blogs1-blog-cards3 {
              width: auto;
              align-self: center;
            }
            .blogs1-container09 {
              width: 240px;
            }
            .blogs1-image3 {
              width: 240px;
              height: 240px;
            }
          }
          @media (max-width: 991px) {
            .blogs1-blog-cards {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              align-self: center;
              flex-direction: row;
              justify-content: center;
            }
            .blogs1-container06 {
              width: var(--dl-size-size-xlarge);
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .blogs1-image {
              height: var(--dl-size-size-xlarge);
            }
            .blogs1-text04 {
              font-size: 18px;
            }
            .blogs1-blog-cards1 {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: flex-start;
            }
            .blogs1-container07 {
              width: var(--dl-size-size-xlarge);
              margin-right: var(--dl-space-space-threeunits);
            }
            .blogs1-image1 {
              height: var(--dl-size-size-xlarge);
            }
            .blogs1-text06 {
              font-size: 18px;
            }
            .blogs1-blog-cards2 {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: flex-start;
            }
            .blogs1-container08 {
              width: var(--dl-size-size-xlarge);
              margin-right: var(--dl-space-space-threeunits);
            }
            .blogs1-image2 {
              height: var(--dl-size-size-xlarge);
            }
            .blogs1-text08 {
              font-size: 18px;
            }
            .blogs1-blog-cards3 {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: flex-start;
            }
            .blogs1-container09 {
              width: var(--dl-size-size-xlarge);
              margin-right: var(--dl-space-space-threeunits);
            }
            .blogs1-image3 {
              height: var(--dl-size-size-xlarge);
            }
            .blogs1-text10 {
              font-size: 18px;
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
            .blogs1-blog-cards {
              align-items: center;
              flex-direction: column;
            }
            .blogs1-container06 {
              width: 100%;
              height: auto;
            }
            .blogs1-image {
              width: 100%;
              height: auto;
            }
            .blogs1-blog-cards1 {
              flex-direction: column;
            }
            .blogs1-container07 {
              width: 100%;
              height: auto;
            }
            .blogs1-image1 {
              width: 100%;
              height: auto;
            }
            .blogs1-blog-cards2 {
              flex-direction: column;
            }
            .blogs1-container08 {
              width: 100%;
              height: auto;
            }
            .blogs1-image2 {
              width: 100%;
              height: auto;
            }
            .blogs1-blog-cards3 {
              flex-direction: column;
            }
            .blogs1-container09 {
              width: 100%;
              height: auto;
            }
            .blogs1-image3 {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .blogs1-blogs {
              width: auto;
            }
            .blogs1-container {
              width: auto;
              height: var(--dl-size-size-small);
            }
            .blogs1-filter {
              height: var(--dl-size-size-small);
            }
            .blogs1-filter1 {
              height: var(--dl-size-size-small);
            }
            .blogs1-filter2 {
              height: var(--dl-size-size-small);
            }
            .blogs1-filter3 {
              height: var(--dl-size-size-small);
            }
            .blogs1-text03 {
              font-size: 10px;
              font-style: normal;
              font-weight: 600;
            }
            .blogs1-blog-cards {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blogs1-container06 {
              width: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .blogs1-image {
              width: 100%;
            }
            .blogs1-blog-cards1 {
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blogs1-container07 {
              width: auto;
              margin-right: 0px;
            }
            .blogs1-image1 {
              width: 100%;
            }
            .blogs1-blog-cards2 {
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .blogs1-container08 {
              width: auto;
              margin-right: 0px;
            }
            .blogs1-image2 {
              width: 100%;
            }
            .blogs1-blog-cards3 {
              flex-direction: column;
            }
            .blogs1-container09 {
              width: auto;
              margin-right: 0px;
            }
            .blogs1-image3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Blogs1.defaultProps = {
  rootClassName1: '',
  text21: 'Read more',
  imagealt1: 'image',
  text221: 'Read more',
  name: 'Samantha Johnson',
  heading3: 'RIDER TIPS',
  heading11: 'TECHNICAL TIPS',
  imagealt211: 'image',
  heading1: 'Heading',
  heading4: 'CAR REVIEWS',
  image: '5caff76b-e5de-4574-b8e4-040b6183fe63',
  imagealt: 'image',
  heading2: 'TECHNICAL TIPS',
  rootClassName111: '',
  imagealt2: 'image',
  heading: 'BIKE REVIEWS',
  componentbutton: '',
  text2: 'Read more',
  text1: 'Read more',
  text22: 'Read more',
  rootClassName: '',
  linkbutton: 'https://forum.revnitro.com',
  text: 'Read more',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text222: 'Read more',
  imagealt21: 'image',
  rootClassName11: '',
  heading12: 'RIDER TIPS',
  imagealt22: 'image',
  text2211: 'Read more',
  imagealt23: 'image',
  text223: 'Read more',
  imagealt24: 'image',
  text224: 'Read more',
  imagealt25: 'image',
  text225: 'Read more',
  imagealt251: 'image',
  text2251: 'Read more',
}

Blogs1.propTypes = {
  rootClassName1: PropTypes.string,
  text21: PropTypes.string,
  imagealt1: PropTypes.string,
  text221: PropTypes.string,
  name: PropTypes.string,
  heading3: PropTypes.string,
  heading11: PropTypes.string,
  imagealt211: PropTypes.string,
  heading1: PropTypes.string,
  heading4: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName111: PropTypes.string,
  imagealt2: PropTypes.string,
  heading: PropTypes.string,
  componentbutton: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text22: PropTypes.string,
  rootClassName: PropTypes.string,
  linkbutton: PropTypes.string,
  text: PropTypes.string,
  imagesrc: PropTypes.string,
  text222: PropTypes.string,
  imagealt21: PropTypes.string,
  rootClassName11: PropTypes.string,
  heading12: PropTypes.string,
  imagealt22: PropTypes.string,
  text2211: PropTypes.string,
  imagealt23: PropTypes.string,
  text223: PropTypes.string,
  imagealt24: PropTypes.string,
  text224: PropTypes.string,
  imagealt25: PropTypes.string,
  text225: PropTypes.string,
  imagealt251: PropTypes.string,
  text2251: PropTypes.string,
}

export default Blogs1
