import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import videosPageInitialPaths1bad2Resource from '../../../resources/videos-page-initial-paths-1bad2'
import videosPageInitialProps6e7fcResource from '../../../resources/videos-page-initial-props-6e7fc'

const Videos11 = (props) => {
  return (
    <>
      <div className="videos11-container">
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
                    <div className="videos11-container1">
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Videos11.defaultProps = {
  videosEntities: [],
}

Videos11.propTypes = {
  videosEntities: PropTypes.array,
}

export default Videos11

export async function getStaticPaths() {
  try {
    const response = await videosPageInitialPaths1bad2Resource({})
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
    const response = await videosPageInitialProps6e7fcResource({
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
