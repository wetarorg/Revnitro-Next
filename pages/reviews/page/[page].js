import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import reviewsPageInitialPaths61555Resource from '../../../resources/reviews-page-initial-paths-61555'
import reviewsPageInitialPropsDeb13Resource from '../../../resources/reviews-page-initial-props-deb13'

const Reviews11 = (props) => {
  return (
    <>
      <div className="reviews11-container">
        <Head>
          <title>Reviews1 - Revnitro</title>
          <meta property="og:title" content="Reviews1 - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(ReviewsEntities) => (
                  <>
                    <div className="reviews11-container1">
                      <h1>{ReviewsEntities?.name}</h1>
                      <span>{ReviewsEntities?.name}</span>
                      <span>{ReviewsEntities?.review}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.reviewsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .reviews11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reviews11-container1 {
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

Reviews11.defaultProps = {
  reviewsEntities: [],
}

Reviews11.propTypes = {
  reviewsEntities: PropTypes.array,
}

export default Reviews11

export async function getStaticPaths() {
  try {
    const response = await reviewsPageInitialPaths61555Resource({})
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
    const response = await reviewsPageInitialPropsDeb13Resource({
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
        reviewsEntities: response,
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
