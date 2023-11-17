import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import blogsPageInitialPathsA57f1Resource from '../../../resources/blogs-page-initial-paths-a57f1'
import blogsPageInitialProps14c86Resource from '../../../resources/blogs-page-initial-props-14c86'

const Blogs11 = (props) => {
  return (
    <>
      <div className="blogs11-container">
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
                    <div className="blogs11-container1">
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
          .blogs11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blogs11-container1 {
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

Blogs11.defaultProps = {
  blogsEntities: [],
}

Blogs11.propTypes = {
  blogsEntities: PropTypes.array,
}

export default Blogs11

export async function getStaticPaths() {
  try {
    const response = await blogsPageInitialPathsA57f1Resource({})
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
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
    const response = await blogsPageInitialProps14c86Resource({
      ...context?.params,
      start: (context.params.page - 1) * 10,
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
