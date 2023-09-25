import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import slidersPageInitialPaths82e29Resource from '../../resources/sliders-page-initial-paths-82e29'
import slidersPageInitialProps82f79Resource from '../../resources/sliders-page-initial-props-82f79'

const Sliders = (props) => {
  return (
    <>
      <div className="sliders-container">
        <Head>
          <title>Sliders - Revnitro</title>
          <meta property="og:title" content="Sliders - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(SlidersEntity) => (
            <>
              <div className="sliders-container1">
                <h1>{SlidersEntity?.Title}</h1>
                <span>{SlidersEntity?.description}</span>
                <span>{SlidersEntity?.url}</span>
              </div>
            </>
          )}
          initialData={props.slidersEntity}
          persistDataDuringLoading={true}
          key={props?.slidersEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .sliders-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sliders-container1 {
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

Sliders.defaultProps = {
  slidersEntity: [],
}

Sliders.propTypes = {
  slidersEntity: PropTypes.array,
}

export default Sliders

export async function getStaticPaths() {
  try {
    const response = await slidersPageInitialPaths82e29Resource({})
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
    const response = await slidersPageInitialProps82f79Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        slidersEntity: response?.data?.[0],
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
