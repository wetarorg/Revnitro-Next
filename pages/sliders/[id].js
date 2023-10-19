import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import slidersPageInitialPaths311ffResource from '../../resources/sliders-page-initial-paths-311ff'
import slidersPageInitialProps50fabResource from '../../resources/sliders-page-initial-props-50fab'

const Sliders11 = (props) => {
  return (
    <>
      <div className="sliders11-container">
        <Head>
          <title>Sliders1 - Revnitro</title>
          <meta property="og:title" content="Sliders1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(SlidersEntity) => (
            <>
              <div className="sliders11-container1">
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
          .sliders11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sliders11-container1 {
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

Sliders11.defaultProps = {
  slidersEntity: [],
}

Sliders11.propTypes = {
  slidersEntity: PropTypes.array,
}

export default Sliders11

export async function getStaticPaths() {
  try {
    const response = await slidersPageInitialPaths311ffResource({})
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
    const response = await slidersPageInitialProps50fabResource({
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
