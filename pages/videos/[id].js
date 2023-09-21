import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import videosPageInitialPaths3a1e0Resource from '../../resources/videos-page-initial-paths-3a1e0'
import videosPageInitialPropsFf949Resource from '../../resources/videos-page-initial-props-ff949'

const Videos11 = (props) => {
  return (
    <>
      <div className="videos11-container">
        <Head>
          <title>Videos1 - Revnitro</title>
          <meta property="og:title" content="Videos1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(VideosEntity) => (
            <>
              <div className="videos11-container1">
                <h1>{VideosEntity?.Title}</h1>
                <span>{VideosEntity?.videoid}</span>
                <span>{VideosEntity?.Description}</span>
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
          .videos11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .videos11-container1 {
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

Videos11.defaultProps = {
  videosEntity: [],
}

Videos11.propTypes = {
  videosEntity: PropTypes.array,
}

export default Videos11

export async function getStaticPaths() {
  try {
    const response = await videosPageInitialPaths3a1e0Resource({})
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
    const response = await videosPageInitialPropsFf949Resource({
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
