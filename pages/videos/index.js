import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import videosPageInitialProps84546Resource from '../../resources/videos-page-initial-props-84546'

const Videos = (props) => {
  return (
    <>
      <div className="videos-container">
        <Head>
          <title>Videos - Revnitro</title>
          <meta property="og:title" content="Videos - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(VideosEntities) => (
                  <>
                    <div className="videos-container1">
                      <h1>{VideosEntities?.Title}</h1>
                      <span>{VideosEntities?.Title}</span>
                      <span>{VideosEntities?.videoid}</span>
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Videos.defaultProps = {
  videosEntities: [],
}

Videos.propTypes = {
  videosEntities: PropTypes.array,
}

export default Videos

export async function getStaticProps(context) {
  try {
    const response = await videosPageInitialProps84546Resource({
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
