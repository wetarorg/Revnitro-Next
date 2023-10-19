import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Allblogs = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="allblogs-container">
        <Head>
          <title>allblogs - Revnitro</title>
          <meta property="og:title" content="allblogs - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name10"></Navbar>
        <div className="allblogs-header">
          <h1 className="allblogs-title">REDEFINING MOBILE JOURNALISM</h1>
          <p className="allblogs-description">
            <span>All posts</span>
            <br></br>
          </p>
          <div className="allblogs-container1">
            <p className="allblogs-description1">
              <span>TAGS</span>
              <br></br>
            </p>
            <button className="allblogs-button button">
              <span className="allblogs-text04">BIKE REVIEW</span>
            </button>
            <button className="allblogs-button1 button">
              <span className="allblogs-text05">CAR REVIEW</span>
            </button>
            <button className="allblogs-button2 button">
              <span className="allblogs-text06">RIDE TIPS</span>
            </button>
          </div>
        </div>
        <div className="allblogs-blog">
          <section className="allblogs-blogs">
            <div className="allblogs-container2">
              <div className="allblogs-blog-cards">
                <DataProvider
                  fetchData={(params) =>
                    fetch(
                      `/api/allblogs-resource-allblogs?${new URLSearchParams(
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
                        renderItem={(context_7wa07) => (
                          <>
                            <Link href={`/blogs/${context_7wa07?.id}`}>
                              <a>
                                <div className="allblogs-container3">
                                  <img
                                    alt="image"
                                    src={context_7wa07?.thumbnail?.url}
                                    className="allblogs-image"
                                  />
                                  <h1 className="allblogs-text07">
                                    {context_7wa07?.Title}
                                  </h1>
                                  <span className="allblogs-text08">
                                    Read more
                                  </span>
                                </div>
                              </a>
                            </Link>
                          </>
                        )}
                      />
                      <div className="allblogs-cms-pagination-node">
                        {params?.meta?.pagination.hasPrevPage && (
                          <Link
                            href={`?${new URLSearchParams({
                              ...router.query,
                              ['cPage-toz6x3']:
                                parseInt(router.query['cPage-toz6x3']) - 1 || 1,
                            })}`}
                          >
                            <a className="allblogs-link1">
                              <div className="allblogs-previous button">
                                <span>Previous</span>
                              </div>
                            </a>
                          </Link>
                        )}
                        {params?.meta?.pagination.hasNextPage && (
                          <Link
                            href={`?${new URLSearchParams({
                              ...router.query,
                              ['cPage-toz6x3']:
                                parseInt(router.query['cPage-toz6x3']) + 1 || 2,
                            })}`}
                          >
                            <a className="allblogs-link2">
                              <div className="allblogs-next button">
                                <span>Next</span>
                              </div>
                            </a>
                          </Link>
                        )}
                      </div>
                    </>
                  )}
                  params={{
                    'pagination[start]':
                      (parseInt(router.query?.['cPage-toz6x3'] ?? 1) - 1) * 3,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .allblogs-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .allblogs-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .allblogs-title {
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
          .allblogs-description {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .allblogs-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .allblogs-description1 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .allblogs-button {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            background-color: #2200ff;
          }
          .allblogs-text04 {
            margin: 0px;
            font-size: 16px;
            font-family: Poppins;
          }
          .allblogs-button1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            background-color: #2200ff;
          }
          .allblogs-text05 {
            margin: 0px;
            font-size: 16px;
            font-family: Poppins;
          }
          .allblogs-button2 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-twounits);
            border-radius: 20px;
            background-color: #2200ff;
          }
          .allblogs-text06 {
            margin: 0px;
            font-size: 16px;
            font-family: Poppins;
          }
          .allblogs-blog {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: flex-start;
          }
          .allblogs-blogs {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 80px;
            flex-direction: column;
            padding-bottom: 80px;
            justify-content: center;
          }
          .allblogs-container2 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .allblogs-blog-cards {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .allblogs-container3 {
            flex: 0 0 auto;
            width: 400px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .allblogs-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
          }
          .allblogs-text07 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .allblogs-text08 {
            color: #ff0000;
          }
          .allblogs-cms-pagination-node {
            display: flex;
          }
          .allblogs-link1 {
            display: contents;
          }
          .allblogs-previous {
            display: flex;
          }
          .allblogs-link2 {
            display: contents;
          }
          .allblogs-next {
            display: flex;
          }
          @media (max-width: 1600px) {
            .allblogs-header {
              padding-top: var(--dl-space-space-threeunits);
            }
            .allblogs-title {
              color: var(--dl-color-gray-black);
              font-size: 50px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 700;
              line-height: 50px;
              text-transform: uppercase;
            }
            .allblogs-description {
              color: var(--dl-color-gray-black);
            }
            .allblogs-container1 {
              height: auto;
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .allblogs-description1 {
              max-width: auto;
              align-self: center;
              text-align: left;
              line-height: 24px;
              margin-left: var(--dl-space-space-twounits);
            }
            .allblogs-button {
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text04 {
              margin: 0px;
              font-size: 24px;
              font-family: Poppins;
            }
            .allblogs-button1 {
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text05 {
              margin: 0px;
              font-size: 24px;
              font-family: Poppins;
            }
            .allblogs-button2 {
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text06 {
              margin: 0px;
              font-size: 24px;
              font-family: Poppins;
            }
            .allblogs-blog {
              height: 100%;
              flex-wrap: wrap;
              align-self: center;
              align-items: flex-start;
              justify-content: center;
            }
            .allblogs-blogs {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
              justify-content: flex-end;
              background-color: transparent;
            }
            .allblogs-container2 {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
              align-self: center;
              align-items: center;
            }
            .allblogs-blog-cards {
              flex-wrap: wrap;
              align-self: stretch;
              align-items: flex-end;
              justify-content: flex-start;
            }
            .allblogs-container3 {
              width: 300px;
            }
            .allblogs-image {
              width: 280px;
              height: 280px;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .allblogs-text07 {
              color: var(--dl-color-gray-black);
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Poppins;
              font-weight: 500;
              margin-bottom: var(--dl-space-space-unit);
            }
            .allblogs-text08 {
              color: #ff0000;
              font-family: Poppins;
            }
          }
          @media (max-width: 1200px) {
            .allblogs-title {
              color: var(--dl-color-gray-black);
              font-size: 80px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 700;
              line-height: 115px;
              text-transform: uppercase;
            }
            .allblogs-description {
              color: var(--dl-color-gray-black);
              max-width: auto;
            }
            .allblogs-container1 {
              height: auto;
              align-self: flex-start;
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .allblogs-description1 {
              color: var(--dl-color-gray-black);
              width: var(--dl-size-size-xlarge);
              font-size: 24px;
              max-width: 100%;
              align-self: center;
              text-align: left;
              line-height: 36px;
              margin-left: var(--dl-space-space-twounits);
            }
            .allblogs-button {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text04 {
              margin: 0px;
              font-size: 24px;
              font-family: Poppins;
            }
            .allblogs-button1 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text05 {
              margin: 0px;
              font-size: 24px;
            }
            .allblogs-button2 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-halfunit);
            }
            .allblogs-text06 {
              margin: 0px;
              font-size: 24px;
            }
            .allblogs-blog {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .allblogs-blogs {
              padding: var(--dl-space-space-fourunits);
            }
            .allblogs-container2 {
              width: 100%;
            }
            .allblogs-blog-cards {
              width: auto;
              align-self: center;
            }
            .allblogs-container3 {
              width: 240px;
            }
            .allblogs-image {
              width: 240px;
              height: 240px;
            }
          }
          @media (max-width: 991px) {
            .allblogs-header {
              height: 100%;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .allblogs-title {
              font-size: 40px;
              line-height: 36px;
            }
            .allblogs-description {
              font-size: 16px;
              line-height: 24px;
            }
            .allblogs-container1 {
              justify-content: center;
            }
            .allblogs-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .allblogs-text04 {
              margin: 0px;
            }
            .allblogs-text05 {
              margin: 0px;
            }
            .allblogs-text06 {
              margin: 0px;
            }
            .allblogs-blog {
              flex-direction: column;
            }
            .allblogs-blog-cards {
              gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
              align-self: center;
              flex-direction: row;
              justify-content: center;
            }
            .allblogs-container3 {
              width: var(--dl-size-size-xlarge);
              margin-right: var(--dl-space-space-threeunits);
            }
            .allblogs-image {
              height: var(--dl-size-size-xlarge);
            }
            .allblogs-text07 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .allblogs-header {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .allblogs-description1 {
              width: var(--dl-size-size-small);
            }
            .allblogs-text04 {
              margin: 0px;
            }
            .allblogs-text05 {
              margin: 0px;
            }
            .allblogs-text06 {
              margin: 0px;
            }
            .allblogs-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .allblogs-blogs {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .allblogs-blog-cards {
              align-items: center;
              flex-direction: column;
            }
            .allblogs-container3 {
              width: 100%;
              height: auto;
            }
            .allblogs-image {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .allblogs-button {
              height: auto;
              text-align: center;
            }
            .allblogs-text04 {
              margin: 0px;
              font-size: 12px;
            }
            .allblogs-button1 {
              height: auto;
              text-align: center;
            }
            .allblogs-text05 {
              margin: 0px;
              font-size: 12px;
            }
            .allblogs-button2 {
              height: auto;
              text-align: center;
            }
            .allblogs-text06 {
              margin: 0px;
              font-size: 12px;
            }
            .allblogs-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .allblogs-blog-cards {
              align-items: center;
              flex-direction: column;
            }
            .allblogs-container3 {
              width: auto;
            }
            .allblogs-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Allblogs
