import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import slidersPageInitialPaths93e1dResource from '../../../resources/sliders-page-initial-paths-93e1d'
import slidersPageInitialProps5c894Resource from '../../../resources/sliders-page-initial-props-5c894'

const Sliders11 = (props) => {
  return (
    <>
      <div className="sliders11-container">
        <Head>
          <title>Sliders1 - Revnitro</title>
          <meta property="og:title" content="Sliders1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(SlidersEntities) => (
                  <>
                    <div className="sliders11-container1">
                      <h1>{SlidersEntities?.Title}</h1>
                      <span>{SlidersEntities?.Title}</span>
                      <span>{SlidersEntities?.description}</span>
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Sliders11.defaultProps = {
  slidersEntities: [],
}

Sliders11.propTypes = {
  slidersEntities: PropTypes.array,
}

export default Sliders11

export async function getStaticPaths() {
  try {
    const response = await slidersPageInitialPaths93e1dResource({})
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
    const response = await slidersPageInitialProps5c894Resource({
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
