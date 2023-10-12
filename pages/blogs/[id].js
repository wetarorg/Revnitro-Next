import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import blogsPageInitialPathsA79bbResource from '../../resources/blogs-page-initial-paths-a79bb'
import blogsPageInitialPropsC5e1eResource from '../../resources/blogs-page-initial-props-c5e1e'

const Blogs11 = (props) => {
  return (
    <>
      <div className="blogs11-container">
        <Head>
          <title>Blogs1 - Revnitro</title>
          <meta property="og:title" content="Blogs1 - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="blogs11-container1">
          <DataProvider
            renderSuccess={(BlogsEntity) => (
              <>
                <div className="blogs11-container2">
                  <h1 className="blogs11-text">{BlogsEntity?.Title}</h1>
                  <div className="blogs11-container3">
                    <span className="blogs11-text1">{BlogsEntity?.Date}</span>
                    <span className="blogs11-text2">
                      {BlogsEntity?.Category}
                    </span>
                    <span className="blogs11-text3">{BlogsEntity?.author}</span>
                  </div>
                  <div className="blogs11-container4">
                    <ReactMarkdown>{BlogsEntity?.content}</ReactMarkdown>
                  </div>
                </div>
              </>
            )}
            initialData={props.blogsEntity}
            persistDataDuringLoading={true}
            key={props?.blogsEntity?.id}
          />
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .blogs11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blogs11-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .blogs11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .blogs11-text {
            font-size: 60px;
          }
          .blogs11-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .blogs11-text1 {
            font-style: normal;
            font-weight: 500;
          }
          .blogs11-text2 {
            color: var(--dl-color-gray-500);
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .blogs11-text3 {
            color: var(--dl-color-gray-500);
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .blogs11-container4 {
            width: 100%;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 479px) {
            .blogs11-container1 {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

Blogs11.defaultProps = {
  blogsEntity: [],
}

Blogs11.propTypes = {
  blogsEntity: PropTypes.array,
}

export default Blogs11

export async function getStaticPaths() {
  try {
    const response = await blogsPageInitialPathsA79bbResource({})
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
    const response = await blogsPageInitialPropsC5e1eResource({
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
