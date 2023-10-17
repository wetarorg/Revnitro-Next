import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import videosPageInitialProps2c82cResource from '../../resources/videos-page-initial-props-2c82c'

const Videos1 = (props) => {
  return (
    <>
      <div className="videos1-container">
        <Head>
          <title>Videos1 - Revnitro</title>
          <meta property="og:title" content="Videos1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(VideosEntities) => (
                  <>
                    <div className="videos1-container1">
                      <h1>{VideosEntities?.Title}</h1>
                      <span>{VideosEntities?.Title}</span>
                      <span>{VideosEntities?.url}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.videosEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .videos1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .videos1-container1 {
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

Videos1.defaultProps = {
  videosEntities: [],
}

Videos1.propTypes = {
  videosEntities: PropTypes.array,
}

export default Videos1

export async function getStaticProps(context) {
  try {
    const response = await videosPageInitialProps2c82cResource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        videosEntities: response,
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
