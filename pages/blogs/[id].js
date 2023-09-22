import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import blogsPageInitialPaths17f79Resource from '../../resources/blogs-page-initial-paths-17f79'
import blogsPageInitialProps4bc96Resource from '../../resources/blogs-page-initial-props-4bc96'

const Blogs11 = (props) => {
  return (
    <>
      <div className="blogs11-container">
        <Head>
          <title>Blogs1 - Revnitro</title>
          <meta property="og:title" content="Blogs1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(BlogsEntity) => (
            <>
              <div className="blogs11-container1">
                <h1>{BlogsEntity?.Title}</h1>
                <span>{BlogsEntity?.BlogUrl}</span>
                <span>{BlogsEntity?.ImageUrl}</span>
              </div>
            </>
          )}
          initialData={props.blogsEntity}
          persistDataDuringLoading={true}
          key={props?.blogsEntity?.id}
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
            flex-direction: column;
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
    const response = await blogsPageInitialPaths17f79Resource({})
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
    const response = await blogsPageInitialProps4bc96Resource({
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
