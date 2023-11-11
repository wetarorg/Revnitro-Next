import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import blogsPageInitialProps6e30eResource from '../../resources/blogs-page-initial-props-6e30e'

const Blogs1 = (props) => {
  return (
    <>
      <div className="blogs1-container">
        <Head>
          <title>Blogs1 - Revnitro</title>
          <meta property="og:title" content="Blogs1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BlogsEntities) => (
                  <>
                    <div className="blogs1-container1">
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
          .blogs1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blogs1-container1 {
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

Blogs1.defaultProps = {
  blogsEntities: [],
}

Blogs1.propTypes = {
  blogsEntities: PropTypes.array,
}

export default Blogs1

export async function getStaticProps(context) {
  try {
    const response = await blogsPageInitialProps6e30eResource({
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
