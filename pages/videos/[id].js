import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import videosPageInitialPathsFde9eResource from '../../resources/videos-page-initial-paths-fde9e'
import videosPageInitialPropsE24a0Resource from '../../resources/videos-page-initial-props-e24a0'

const Videos = (props) => {
  return (
    <>
      <div className="videos-container">
        <Head>
          <title>Videos - Revnitro</title>
          <meta property="og:title" content="Videos - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(VideosEntity) => (
            <>
              <div className="videos-container1">
                <h1>{VideosEntity?.Title}</h1>
                <span>{VideosEntity?.url}</span>
                <span>{VideosEntity?.Category}</span>
              </div>
            </>
          )}
          initialData={props.videosEntity}
          persistDataDuringLoading={true}
          key={props?.videosEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .videos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .videos-container1 {
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

Videos.defaultProps = {
  videosEntity: [],
}

Videos.propTypes = {
  videosEntity: PropTypes.array,
}

export default Videos

export async function getStaticPaths() {
  try {
    const response = await videosPageInitialPathsFde9eResource({})
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
    const response = await videosPageInitialPropsE24a0Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        videosEntity: response?.data?.[0],
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
