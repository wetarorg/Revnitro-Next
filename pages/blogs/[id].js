import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import blogsPageInitialPaths96f29Resource from '../../resources/blogs-page-initial-paths-96f29'
import blogsPageInitialProps9a687Resource from '../../resources/blogs-page-initial-props-9a687'

const Blogs = (props) => {
  return (
    <>
      <div className="blogs-container">
        <Head>
          <title>Blogs - Revnitro</title>
          <meta property="og:title" content="Blogs - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name11"></Navbar>
        <DataProvider
          renderSuccess={(BlogsEntity) => (
            <>
              <div className="blogs-container1">
                <h1>{BlogsEntity?.Title}</h1>
                <span>{BlogsEntity?.description}</span>
                <span>{BlogsEntity?.Category}</span>
                <div className="blogs-container2">
                  <ReactMarkdown>{BlogsEntity?.content}</ReactMarkdown>
                </div>
              </div>
            </>
          )}
          initialData={props.blogsEntity}
          persistDataDuringLoading={true}
          key={props?.blogsEntity?.id}
        />
        <Footer rootClassName="footer-root-class-name7"></Footer>
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
          .blogs-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .blogs-container2 {
            width: 100%;
            align-self: stretch;
          }
          @media (max-width: 1600px) {
            .blogs-container1 {
              padding: var(--dl-space-space-sixunits);
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
    const response = await blogsPageInitialPaths96f29Resource({})
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
    const response = await blogsPageInitialProps9a687Resource({
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
