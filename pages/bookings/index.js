import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import bookingsPageInitialPropsE9778Resource from '../../resources/bookings-page-initial-props-e9778'

const Bookings = (props) => {
  return (
    <>
      <div className="bookings-container">
        <Head>
          <title>Bookings - Revnitro</title>
          <meta property="og:title" content="Bookings - Revnitro" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BookingsEntities) => (
                  <>
                    <div className="bookings-container1">
                      <h1>{BookingsEntities?.name}</h1>
                      <span>{BookingsEntities?.name}</span>
                      <span>{BookingsEntities?.email}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.bookingsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .bookings-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .bookings-container1 {
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

Bookings.defaultProps = {
  bookingsEntities: [],
}

Bookings.propTypes = {
  bookingsEntities: PropTypes.array,
}

export default Bookings

export async function getStaticProps(context) {
  try {
    const response = await bookingsPageInitialPropsE9778Resource({
      ...context?.params,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        bookingsEntities: response,
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
