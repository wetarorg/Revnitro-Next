import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import blogsPageInitialProps99d1cResource from '../../resources/blogs-page-initial-props-99d1c'

const Blogs = (props) => {
  return (
    <>
      <div className="blogs-container">
        <Head>
          <title>Blogs - Revnitro</title>
          <meta property="og:title" content="Blogs - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BlogsEntities) => (
                  <>
                    <div className="blogs-container1">
                      <h1>{BlogsEntities?.Title}</h1>
                      <span>{BlogsEntities?.Title}</span>
                      <span>{BlogsEntities?.description}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.blogsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Blogs.defaultProps = {
  blogsEntities: [],
}

Blogs.propTypes = {
  blogsEntities: PropTypes.array,
}

export default Blogs

export async function getStaticProps(context) {
  try {
    const response = await blogsPageInitialProps99d1cResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        blogsEntities: response,
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
