import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import reviewsPageInitialPaths3eb5bResource from '../../resources/reviews-page-initial-paths-3eb5b'
import reviewsPageInitialPropsAc07dResource from '../../resources/reviews-page-initial-props-ac07d'

const Reviews = (props) => {
  return (
    <>
      <div className="reviews-container">
        <Head>
          <title>Reviews - Revnitro</title>
          <meta property="og:title" content="Reviews - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(ReviewsEntity) => (
            <>
              <div className="reviews-container1">
                <h1>{ReviewsEntity?.name}</h1>
                <span>{ReviewsEntity?.review}</span>
                <span>{ReviewsEntity?.contact}</span>
              </div>
            </>
          )}
          initialData={props.reviewsEntity}
          persistDataDuringLoading={true}
          key={props?.reviewsEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .reviews-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reviews-container1 {
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

Reviews.defaultProps = {
  reviewsEntity: [],
}

Reviews.propTypes = {
  reviewsEntity: PropTypes.array,
}

export default Reviews

export async function getStaticPaths() {
  try {
    const response = await reviewsPageInitialPaths3eb5bResource({})
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
    const response = await reviewsPageInitialPropsAc07dResource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        reviewsEntity: response?.data?.[0],
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
