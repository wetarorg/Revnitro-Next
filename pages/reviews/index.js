import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import reviewsPageInitialProps8a662Resource from '../../resources/reviews-page-initial-props-8a662'

const Reviews1 = (props) => {
  return (
    <>
      <div className="reviews1-container">
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
                    <div className="reviews1-container1">
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
          .reviews1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reviews1-container1 {
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

Reviews1.defaultProps = {
  reviewsEntities: [],
}

Reviews1.propTypes = {
  reviewsEntities: PropTypes.array,
}

export default Reviews1

export async function getStaticProps(context) {
  try {
    const response = await reviewsPageInitialProps8a662Resource({
      ...context?.params,
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
