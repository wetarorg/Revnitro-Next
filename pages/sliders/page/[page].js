import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import slidersPageInitialPaths3aabfResource from '../../../resources/sliders-page-initial-paths-3aabf'
import slidersPageInitialProps74d39Resource from '../../../resources/sliders-page-initial-props-74d39'

const Sliders1 = (props) => {
  return (
    <>
      <div className="sliders1-container">
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
                    <div className="sliders1-container1">
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
          .sliders1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .sliders1-container1 {
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

Sliders1.defaultProps = {
  slidersEntities: [],
}

Sliders1.propTypes = {
  slidersEntities: PropTypes.array,
}

export default Sliders1

export async function getStaticPaths() {
  try {
    const response = await slidersPageInitialPaths3aabfResource({})
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
    const response = await slidersPageInitialProps74d39Resource({
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
