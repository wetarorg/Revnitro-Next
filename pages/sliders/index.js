import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import slidersPageInitialProps29bd3Resource from '../../resources/sliders-page-initial-props-29bd3'

const Sliders = (props) => {
  return (
    <>
      <div className="sliders-container">
        <Head>
          <title>Sliders - Revnitro</title>
          <meta property="og:title" content="Sliders - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(SlidersEntities) => (
                  <>
                    <div className="sliders-container1">
                      <h1>{SlidersEntities?.Title}</h1>
                      <span>{SlidersEntities?.Title}</span>
                      <span>{SlidersEntities?.Imageurl}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.slidersEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Sliders.defaultProps = {
  slidersEntities: [],
}

Sliders.propTypes = {
  slidersEntities: PropTypes.array,
}

export default Sliders

export async function getStaticProps(context) {
  try {
    const response = await slidersPageInitialProps29bd3Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        slidersEntities: response,
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